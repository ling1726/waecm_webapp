import os, logging
from flask import Flask, session, jsonify,  request, session, redirect, url_for, Response, render_template 
from json import dumps
from flask_jwt import JWT, jwt_required, current_identity
from database import db_session, init_db, create_testdata
from models import *
from auth import *
from api import *

######################################
### CREATE APP
#####################################
if os.environ['DEV']:
    app = Flask(__name__, template_folder='./static/dist')
else:
    app = Flask(__name__, template_folder='./static/prod')

app.secret_key = os.urandom(12)

######################################
# JWT CONFIG
######################################
jwt = JWT(app, authenticate, identity)



######################################
### APP CONFIG
######################################
app.config.update(dict(
    SECRET_KEY='development',
    USERNAME='G10WAECM',
    PASSWORD='toto'
))

# to remove db_session at the end of a request
@app.teardown_appcontext
def shutdown_session(exception = None):
    db_session.remove()


####################################### 
### REGISTER API ROUTES      
#######################################
app.register_blueprint(counterAPI)


# main route to serve react client
@app.route('/')
def home():
    return render_template('index.html')    

# route to check authenticity of jwt token
@app.route('/checkAuth', methods=['POST'])
@jwt_required()
def checkAuth():
    return jsonify(value=True)

if __name__ == '__main__':
    init_db()
    create_testdata()
    if os.environ['DEV']:
        app.run(host='0.0.0.0', port=8080, debug=True)
    else:
        app.run(host='0.0.0.0', port=8080)

