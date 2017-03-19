import os, logging
from flask import Flask, session, jsonify,  request, session, redirect, url_for, Response 
from json import dumps
from database import db_session, init_db
from models import *


# create application
app = Flask(__name__)
app.secret_key = os.urandom(12)


#config
app.config.update(dict(
    SECRET_KEY='development',
    USERNAME='G10WAECM',
    PASSWORD='toto'
))



# to remove db_session at the end of a request
@app.teardown_appcontext
def shutdown_session(exception = None):
    db_session.remove()

@app.route('/')
def home():
    return render_template('home/index.html')

@app.route('/api/counter', methods=['GET', 'POST'])
def counter():
    counter = db_session.query(Counter).first()
    if request.method == 'GET':
        return jsonify(value=counter.value)
    else:
        counter.increment()
        db_session.commit()
        return jsonify(value=counter.value)

@app.route('/api/counter/reset', methods=['POST'])
def resetCounter():
    counter = db_session.query(Counter).first()
    counter.reset()
    db_session.commit()
    return jsonify(value=counter.value)

if __name__ == '__main__':
    init_db()
    app.run()
