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