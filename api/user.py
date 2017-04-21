from flask import Blueprint, jsonify, request
from flask_jwt import jwt_required
from flask_jwt import current_identity
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

    user = db_session.query(User, User.email, User.balance, User.limit).filter_by(id=str(current_identity)).first()
    return jsonify(email=user.email, balance=user.balance, limit=user.limit)


@userAPI.route('/api/user/changeLimit', methods=['PUT'])
@jwt_required()
def changeLimit():
    logger.info('update limit')
    data=request.get_json();

    user = db_session.query(User, User.email, User.balance, User.limit).filter_by(id=str(current_identity)).first()

    try:
        user.limit=data['limit']
        db_session.commit()
        return jsonify (message="ok")
    except:
        logger.info('update limit failed')
        return jsonify(message= "exception !")


