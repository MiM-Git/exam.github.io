import datetime
import imp
import json
import time
from operator import le

import psycopg2
from flask import Flask, request, render_template, jsonify, redirect, url_for, send_from_directory
from flask_mysqldb import MySQL
import MySQLdb.cursors
import pymysql
import os
from exceptions import WorngValue
from uuid import uuid4
from conection import *
from User_modle import *
from PIL import Image

app = Flask(__name__)


@app.route('/login', methods=['POST'])
def login():
    get_data = request.get_json()
    user_email = get_data['email']
    user_password = get_data['password']

    try:
        with Connection() as cursor:
            cursor.execute("SELECT * FROM users WHERE email = %s and password = encode(sha256(%s::bytea),'hex')",
                           (user_email, user_password))
            user_login = User.tojson(cursor)
            if len(user_login) == 0:
                raise WorngValue("email or password is wrong")
            uid = str(uuid4())
            cursor.execute("update Users set uid = %s where email = %s", (uid, user_email))
            cursor.connection.commit()
            user_login[0]['uid'] = uid
            return jsonify(user_login[0]), 200

    except WorngValue as e:
        return jsonify({"message": str(e)}), 401

    except Exception as e:
        print(e)
        return jsonify({"message": "connection error"}), 502


@app.route('/register', methods=['POST'], strict_slashes=False)
def register():
    get_data = request.get_json()
    register_user = User(get_data['name'], get_data['family'], get_data['email'], get_data['password'],
                         get_data['type'])

    try:
        with Connection() as cursor:
            cursor.execute(
                "INSERT INTO Users(name, family, email, password, type) VALUES (%s, %s, %s, encode(sha256(%s::bytea),"
                "'hex'), %s)", (register_user.name, register_user.family, register_user.email, register_user.password,
                                register_user.user_type))
            cursor.connection.commit()
            return jsonify({"message": "successful"}), 200
    except psycopg2.Error as e:
        return jsonify({"message": "email is duplicate"}), 401

    except Exception:
        print(type(Exception))
        return jsonify({"message": "connection error"}), 502


@app.route('/change_pass', methods=['POST'], strict_slashes=False)
def cahnge_pass():
    get_data = request.get_json()
    old_pass = get_data['old_pass']
    new_pass = get_data['new_pass']
    user_id = get_data['id']
    try:
        with Connection() as cursor:
            cursor.execute("SELECT password FROM users WHERE id = %s and password = encode(sha256(%s::bytea),'hex')",
                           (user_id, old_pass))
            if len(cursor.fetchall()) == 0:
                raise WorngValue("old password is wrong")
            cursor.execute("update Users set password =  encode(sha256(%s::bytea),'hex') where id = %s",
                           (new_pass, user_id))
            cursor.connection.commit()
            return jsonify({"message": "successful"}), 200
    except WorngValue as e:
        return jsonify({"message": str(e)}), 401
    except Exception:
        return jsonify({"message": "connection error"}), 502


@app.route('/change_info', methods=['POST'], strict_slashes=False)
def cahnge_info():
    get_data = request.get_json()
    new_name = get_data['new_name']
    new_family = get_data['new_family']
    user_id = get_data['id']
    try:
        with Connection() as cursor:
            cursor.execute("update Users set name = %s , family = %s where id = %s",
                           (new_name, new_family, user_id))
            cursor.connection.commit()
            return jsonify({"message": "successful"}), 200
    except Exception:
        return jsonify({"message": "connection error"}), 502


@app.route('/register_exam', methods=['POST'], strict_slashes=False)
def register_exam():
    get_data = request.get_json()
    exam_info = Exam(get_data['name'], get_data['start_time'], get_data['end_time'], get_data['uni_name'],
                     get_data['exam_pass'], get_data['master_id'], get_data['random_question'],
                     get_data['random_answer'])
    try:
        with Connection() as cursor:
            cursor.execute(
                "insert into exam (name, start_time, end_time, uni_name, password, master_id, random_question, random_answer) VALUES (%s, %s, %s, %s, encode(sha256(%s::bytea),'hex'),%s,%s,%s)",
                (exam_info.name, exam_info.start_time, exam_info.end_time, exam_info.uni_name, exam_info.password,
                 exam_info.master_id, exam_info.random_question, exam_info.random_answer))
            cursor.connection.commit()
            return jsonify({"message": "successful"}), 200
    except WorngValue as e:
        return jsonify({"message": str(e)}), 401
    except Exception as e:
        print(e)
        return jsonify({"message": "connection error"}), 502


@app.route('/load_master_exam', methods=['POST'], strict_slashes=False)
def master_exam():
    get_data = request.get_json()
    master_id = get_data['master_id']
    try:
        with Connection() as cursor:
            cursor.execute("select * from exam where master_id =%s", (master_id,))
            exam_list = User.tojson(cursor)
            if len(exam_list) == 0:
                raise WorngValue("there is no exam")
            return jsonify(exam_list), 200
    except WorngValue as e:
        return jsonify({"message": str(e)}), 401
    except Exception:
        return jsonify({"message": "connection error"}), 502


@app.route('/create_question', methods=['POST'], strict_slashes=False)
def create_question():
    question_info = Questions(request.form['q_type'], request.form['exam_id'], request.form['txt'])
    UPLOAD_FOLDER = None
    file_name = None
    if question_info.q_type == 'file':
        exam_file = request.files['file']
        file_name = exam_file.filename
        UPLOAD_FOLDER = f'uploads/questions/{question_info.exam_id}'
        app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
        if not os.path.isdir(UPLOAD_FOLDER):
            os.mkdir(UPLOAD_FOLDER)
        exam_file.save(os.path.join(app.config['UPLOAD_FOLDER'], file_name))
    try:

        with Connection() as cursor:
            cursor.execute(
                "insert into questions (type , exam_id, file_address, question,file_name) VALUES (%s, %s, %s, %s,%s)",
                (question_info.q_type, question_info.exam_id, UPLOAD_FOLDER,
                 None if UPLOAD_FOLDER != None else question_info.txt, file_name))
            cursor.connection.commit()
            return jsonify({"message": "successful"}), 200
    except WorngValue as e:
        return jsonify({"message": str(e)}), 401
    except Exception as e:
        print(e)
        return jsonify({"message": "connection error"}), 502


@app.route('/download_file', methods=['POST'])
def download():
    get_data = request.get_json()
    file_address = get_data['file_address']
    file_name = get_data['file_name']
    UPLOAD_FOLDER = f"{file_address}"
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
    return send_from_directory(app.config["UPLOAD_FOLDER"], f"{file_name}")


@app.route('/load_question', methods=['POST'])
def load_questions():
    get_data = request.get_json()
    exam_id = get_data['exam_id']
    try:
        with Connection() as cursor:
            cursor.execute("select q.* from exam  join public.questions q on exam.id = q.exam_id where exam_id = %s",
                           (exam_id,))
            exam_list = User.tojson(cursor)
            if len(exam_list) == 0:
                raise WorngValue("there is no question!!")
            return jsonify(exam_list), 200
    except WorngValue as e:
        return jsonify({"message": str(e)}), 401
    # except Exception:
    #     return jsonify({"message": "connection error"}), 502


@app.route('/create_choice', methods=['POST'], strict_slashes=False)
def create_choice():
    get_data = request.get_json()
    choice_info = Choices(get_data['txt'], get_data['correct'], get_data['question_id'])
    try:
        with Connection() as cursor:
            cursor.execute(
                "insert into choice (txt, correct, question_id) VALUES (%s, %s, %s)", (choice_info.txt, choice_info.correct, choice_info.question_id))
            cursor.connection.commit()
            return jsonify({"message": "successful"}), 200
    except WorngValue as e:
        return jsonify({"message": str(e)}), 401
    except Exception as e:
        print(e)
        return jsonify({"message": "connection error"}), 502


@app.after_request
def set_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "*"
    return response


if __name__ == "__main__":
    app.run(port=8010)
