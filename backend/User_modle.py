class User:
    def __init__(self, name, family, email, password, user_type) -> None:
        self.name = name
        self.family = family
        self.email = email
        self.password = password
        self.user_type = user_type

    @staticmethod
    def tojson(cursor):
        columns = [column[0] for column in cursor.description]
        all_data = cursor.fetchall()
        cursor_list = []
        for data in all_data:
            user_data = {}
            for j, val_j in enumerate(data):
                user_data[columns[j]] = val_j
            cursor_list.append(user_data)
        return cursor_list


class Exam:
    def __init__(self, name, start_time, end_time, uni_name, password, master_id, random_question,
                 random_answer) -> None:
        self.name = name
        self.start_time = start_time
        self.end_time = end_time
        self.uni_name = uni_name
        self.password = password
        self.master_id = master_id
        self.random_question = random_question
        self.random_answer = random_answer

    @staticmethod
    def valid_exam(exam_list, org_name):
        flag = False
        for i in exam_list:
            if i['name'] == org_name:
                i['name'] = i['name'] + '(0)'
                flag = True
                break
        print(exam_list[-1])
        if flag:
            exam_list = sorted(exam_list, key=lambda x: x['name'][-2])
            last_num = int(exam_list[-1]['name'][-2])
            org_name = org_name + f"({last_num + 1})"
        return org_name


class Questions:
    def __init__(self, q_type, exam_id, txt) -> None:
        self.q_type = q_type
        self.exam_id = exam_id
        self.txt = txt


class Choices:
    def __init__(self, txt, correct, question_id) -> None:
        self.correct = correct
        self.question_id = question_id
        self.txt = txt
