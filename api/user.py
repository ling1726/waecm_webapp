from flask import Blueprint, jsonify, request
from flask_jwt import jwt_required
from flask_jwt import current_identity
from sqlalchemy import update
from . import User
from . import db_session
import logging
import sys

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
logger.addHandler(logging.StreamHandler(sys.stdout))
userAPI = Blueprint('userAPI', __name__)

@userAPI.route('/api/user', methods=['GET'])
@jwt_required()
def getUserData():
    logger.info('providing user data')

    user = db_session.query(User.firstName, User.lastName, User.email, User.balance, User.limit).filter_by(id=str(current_identity)).first()
    return jsonify(firstName=user.firstName, lastName=user.lastName, email=user.email, balance=user.balance, limit=user.limit)



@userAPI.route('/api/user/changeLimit', methods=['PUT'])
@jwt_required()
def changeLimit():
    logger.info('update limit')

    limit = request.json.get('limit')
    try:
        userId = str(current_identity)
        print userId
        stmt = update(User).where(User.id ==str(current_identity)).values(limit=limit)
        db_session.execute(stmt)
        db_session.commit()
        message='limit successfully changed to ' + limit
        return jsonify(message= message)
    except Exception, e:
        logger.info('update limit failed  ' + str(e))
        return jsonify(message = "exception occured during update limit request!")

