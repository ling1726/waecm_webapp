from flask import Blueprint, jsonify, request
from flask_jwt import jwt_required
from flask_jwt import current_identity
from sqlalchemy import update
from util.DecimalEncoder import DecimalEncoder
from . import User, Transfer
from . import db_session
from decimal import Decimal
import logging
import sys
import datetime

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
logger.addHandler(logging.StreamHandler(sys.stdout))
userAPI = Blueprint('userAPI', __name__)

@userAPI.route('/api/user', methods=['GET'])
@jwt_required()
def getUserData():
    logger.info('providing user data')

    user = db_session.query(User).filter_by(id=str(current_identity)).first()
    outTransfers = user.account.outTransfers

    today = datetime.date.today()
    start_time = today.replace(day=1)
    outTransfers = outTransfers.filter(Transfer.transferDateTime >= start_time).all()

    sumOfOutTransfers = 0

    for transfer in outTransfers:
        print transfer
        sumOfOutTransfers += transfer.amount
    amountRemaining = user.limit - sumOfOutTransfers
    
    return jsonify(firstName=user.firstName, lastName=user.lastName, email=user.email, balance=user.balance, limit=user.limit, remaining=amountRemaining)



@userAPI.route('/api/user/changeLimit', methods=['PUT'])
@jwt_required()
def changeLimit():
    logger.info('update limit')

    limit = request.json.get('limit')
    try:
        userId = str(current_identity)
        print userId

        if (Decimal(limit) < 0):
            return jsonify(message = "limit cannot be negative!")

        stmt = update(User).where(User.id ==str(current_identity)).values(limit=limit)
        db_session.execute(stmt)
        db_session.commit()
        message='limit successfully changed to ' + limit
        return jsonify(message= message)
    except Exception, e:
        logger.info('update limit failed  ' + str(e))
        return jsonify(message = "exception occured during update limit request!")

