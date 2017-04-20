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
@jwt_required()
def getUserData():
    logger.info('providing user data')

    user = db_session.query(User).filter_by(id=str(current_identity)).first()
    return jsonify(email=user.email, firstname=user.firstName, lastname=user.lastName, balance=user.balance, limit=user.limit)


