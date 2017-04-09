from flask import Blueprint, jsonify
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
# @jwt_required()
def getUserData():
    userId = 'maxmustermann@gmail.com' #current_identity
    user = db_session.query(User, User.email, User.balance, User.limit).filter_by(email=userId).first()

    logger.info('found user')
    logger.info(user)

    return jsonify(email=user.email, balance=user.balance, limit=user.limit)


# @counterAPI.route('/api/counter', methods=['POST'])
# @jwt_required()
# def incrementCounter():
#     counter = db_session.query(Counter).first()
#     counter.increment()
#     db_session.commit()
#     return jsonify(value=counter.value)
#
#
#
# @counterAPI.route('/api/counter/reset', methods=['POST'])
# @jwt_required()
# def resetCounter():
#     counter = db_session.query(Counter).first()
#     counter.reset()
#     db_session.commit()
#     return jsonify(value=counter.value)

