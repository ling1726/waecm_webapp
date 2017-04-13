from flask import Blueprint, jsonify
from flask_jwt import jwt_required
from flask_jwt import current_identity
from . import Account
from . import db_session
import logging
import sys

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
logger.addHandler(logging.StreamHandler(sys.stdout))
accountAPI = Blueprint('accountAPI', __name__)

@accountAPI.route('/api/account', methods=['GET'])
@jwt_required()
def getUserData():
    logger.info('providing account data')

    account = db_session.query(Account, Account.iban, Account.bic).filter_by(userId=str(current_identity)).first()
    return jsonify(iban=account.iban, bic=account.bic)

@accountAPI.route('/api/account/activity', methods=['GET'])
@jwt_required()
def getActivity():
    logger.info('fetching all transfers')
    account = db_session.query(Account).filter_by(userId=str(current_identity)).first()
    inTransfers = account.inTransfers
    outTransfers = account.outTransfers

    allTransfers = []
    
    for transfer in inTransfers:
        allTransfers.append({'id': transfer.id,'amount': str(transfer.amount), 'date': transfer.getReadableDate(),'timestamp':transfer.getTimestamp(),'comment': transfer.comment, 'externalParty': transfer.senderName, 'type': 'in'})

    for transfer in outTransfers:
        allTransfers.append({'id': transfer.id,'amount': str(transfer.amount), 'date': transfer.getReadableDate(),'timestamp':transfer.getTimestamp(), 'comment': transfer.comment, 'externalParty': transfer.getRecipientName(),'type':'out'})
    return jsonify(transfers=allTransfers)
