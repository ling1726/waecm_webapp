from flask import Blueprint, jsonify, request
from flask_jwt import jwt_required
from flask_jwt import current_identity
from . import Transfer
from . import Account
from . import User
from . import Tag
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
    user = db_session.query(User).filter_by(id=str(current_identity)).first()
    senderAccount = user.account
    recipientAccount = db_session.query(Account).filter_by(iban=data['recipientIban']).first()
    
    if (recipientAccount != None):
        if(senderAccount.id == recipientAccount.id):
            return jsonify(message='Accounts must not be equal')

        receiverName = data['receiverName']
        comment = data['comment']

        if (data['amount'] == None):
            return jsonify(message='No amount specified')

        try:
            amount = float(data['amount'])
        except ValueError:
            return jsonify(message='Invalid amount specified')

        if(amount<0):
            return jsonify(message='Amount negative')

        if (receiverName == None):
            return jsonify(message='No sender name specified')

        transfer = Transfer(amount, datetime.now(), comment, senderAccount, recipientAccount, receiverName)
        tags = json.loads(data['tags'])
        for tag in tags:
            transfer.tags.append(db_session.query(Tag).filter_by(title=tag).first())

        user.balance = user.balance - amount
        db_session.add(transfer)
        db_session.commit()
    else:
        return jsonify(message='Unknown recipient account')
    return jsonify(message='Your transfer was conducted')

@transferAPI.route('/api/transfer/tags', methods=['GET'])
@jwt_required()
def getTags():
    logger.info('providing available tags')
    tags = db_session.query(Tag).all()
    tag_titles = [ tag.title for tag in tags]
    return jsonify(tags=tag_titles)
