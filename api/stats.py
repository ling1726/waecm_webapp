from flask import Blueprint, jsonify, request
from flask_jwt import jwt_required
from flask_jwt import current_identity

from util.DecimalEncoder import DecimalEncoder
from . import User
from . import db_session
from service import StatsService
import logging
import sys
import json

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
logger.addHandler(logging.StreamHandler(sys.stdout))
statsAPI = Blueprint('statsAPI', __name__)

@statsAPI.route('/api/stats', methods=['GET'])
@jwt_required()
def getStats():
    interval = request.args.get('interval')
    diff = request.args.get('diff')
    logger.info('interval= ' + interval)

    service = StatsService()
    stats = service.getStats(current_identity, interval, diff)

    logger.info('stats: ' + str(stats))
    return json.dumps(dict(stats), cls=DecimalEncoder)


