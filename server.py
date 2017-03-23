import os, logging
from flask import Flask, session, jsonify,  request, session, redirect, url_for, Response, render_template 
from json import dumps
from flask_jwt import JWT, jwt_required, current_identity
from database import db_session, init_db
from models import *
from auth import *


# create application
app = Flask(__name__, template_folder='./static/prod')
app.secret_key = os.urandom(12)

# jwt
jwt = JWT(app, authenticate, identity)

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
    return render_template('index.html')    

@app.route('/api/counter', methods=['GET'])
def getCounter():
    counter = db_session.query(Counter).first()
    if counter is None:
        counter = Counter()
        db_session.add(counter)
        db_session.commit()

    return jsonify(value=counter.value)


@app.route('/api/counter', methods=['POST'])
@jwt_required()
def incrementCounter():
    counter = db_session.query(Counter).first()
    counter.increment()
    db_session.commit()
    return jsonify(value=counter.value)



@app.route('/api/counter/reset', methods=['POST'])
@jwt_required()
def resetCounter():
    counter = db_session.query(Counter).first()
    counter.reset()
    db_session.commit()
    return jsonify(value=counter.value)

@app.route('/checkAuth', methods=['POST'])
@jwt_required()
def checkAuth():
    return jsonify(value=True)

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=8080)
