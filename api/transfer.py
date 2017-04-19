from flask import Blueprint, jsonify, request
from flask_jwt import jwt_required
from flask_jwt import current_identity
from . import Transfer
from . import Account
from . import User
from . import db_session
from datetime import datetime
import json
import logging
import sys

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
logger.addHandler(logging.StreamHandler(sys.stdout))

transferAPI = Blueprint('transferAPI', __name__)

@transferAPI.route('/api/transfer', methods=['POST'])
@jwt_required()
def createTransfer():
    logger.info('providing account data')
    data = request.get_json()
    senderAccount = db_session.query(Account).filter_by(iban=data['senderIban']).first()
    user = db_session.query(User).filter_by(id=str(current_identity)).first()
    print user.balance
    recipientAccount = db_session.query(Account).filter_by(iban=data['recipientIban']).first()
    if (recipientAccount != None):
        transfer = Transfer(data['amount'], datetime.now(), data['comment'], senderAccount, recipientAccount, data['senderName'])
        user.balance = user.balance - float(data['amount'])
        db_session.add(transfer)
        db_session.commit()
    else:
        return jsonify(message='Unknown recipient account')
    return jsonify(message='Your transfer was conducted')
