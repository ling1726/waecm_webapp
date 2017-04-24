import os, logging, sys, jwt
from flask_socketio import SocketIO, join_room, leave_room, emit

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
logger.addHandler(logging.StreamHandler(sys.stdout))


socketio = SocketIO()
####################################### 
### REGISTER WEBSOCKET ROUTES      
#######################################

@socketio.on('connect')
def logUserConnection():
    logger.info("new websocket connection")    
    return 

@socketio.on('join')
# to test this, log on as user id=1 and then another user ;)
def onJoin(data):
    token = data['token']
    identity = jwt.decode(token, 'development', algorithms=['HS256'])['identity']
    join_room(identity)
    logger.info('user: ' + str(identity) +' is ready to receive notifications')
    emit('NOTIFICATION', 'Welcome to piggyBank!', room=identity)
    if identity != 1: emit('NOTIFICATION', 'TESTING NOTIFICATION SERVICE', room=1)

if __name__ == '__main__':
    app.logger.info('Stating up Flask')
    init_db()
    create_testdata()
    if os.environ['DEV'] == 'true':
        socketio.run(app, host='0.0.0.0', port=8080, debug=True)
    else:
        socketio.run(app, host='0.0.0.0', port=8080)

