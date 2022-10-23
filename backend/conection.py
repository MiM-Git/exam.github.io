import pymysql
import psycopg2


class Connection:

    def __enter__(self):
        self.engine = psycopg2.connect(database="Exam_Creator", user='postgres',
                                       password='123456', host='localhost', port='5432')
        self.cursor = self.engine.cursor()
        return self.cursor

    def __exit__(self, exc_type, exc_value, exc_traceback):
        if self.cursor:
            self.cursor.close()
            self.engine.close()
            print(exc_type, exc_value, exc_traceback)




