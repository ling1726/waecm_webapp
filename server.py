import os, logging, sys, jwt
import ssl

from gevent import monkey
monkey.patch_all()

from flask import Flask, session, jsonify,  request, session, redirect, url_for, Response, render_template 
from json import dumps
from flask_jwt import JWT, jwt_required, current_identity
from database import db_session, init_db, create_testdata
from models import *
from auth import *
from flask_socketio import SocketIO, join_room, leave_room, emit
from sockets import socketio


logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
logger.addHandler(logging.StreamHandler(sys.stdout))


######################################
### CREATE APP
#####################################
if 'DEV' in os.environ and  os.environ['DEV'] == 'true':
    app = Flask(__name__, template_folder='./static/dist')
else:
    app = Flask(__name__, template_folder='./static/prod')

app.secret_key = os.urandom(12)

######################################
### APP CONFIG
######################################
app.config.update(dict(
    SECRET_KEY='development',
    USERNAME='G10WAECM',
    PASSWORD='toto'
))


######################################
### JWT CONFIG
######################################
auth = JWT(app, authenticate, identity)


# to remove db_session at the end of a request
@app.teardown_appcontext
def shutdown_session(exception = None):
    db_session.remove()


####################################### 
### REGISTER API ROUTES      
#######################################
from api import *

app.register_blueprint(counterAPI)
app.register_blueprint(userAPI)
app.register_blueprint(accountAPI)
app.register_blueprint(statsAPI)
app.register_blueprint(transferAPI)
app.register_blueprint(healthcheckAPI)

# main route to serve react client
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def home(path):
    return render_template('index.html')    



if __name__ == '__main__':
    app.logger.info('Stating up Flask')
    init_db()
    create_testdata()
    socketio.init_app(app)
    if os.environ.has_key('DEV') and os.environ['DEV'] == 'true':
        socketio.run(app, host='0.0.0.0', port=8080, debug=True, 
                     certfile='ssl/server.crt', keyfile='ssl/server.key')
    else:
        socketio.run(app, host='0.0.0.0', port=8080,  
                     certfile='ssl/server.crt', keyfile='ssl/server.key')

