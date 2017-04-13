from models import Transfer, Account
from database import db_session
import sqlalchemy as sa
import logging, sys

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
logger.addHandler(logging.StreamHandler(sys.stdout))

class StatsService:

    def getStats(self, userId, interval, diff):

        accID = db_session.query(Account, Account.id).filter_by(userId=str(userId)).first()

        logger.info("userid " + str(userId))
        logger.info("accid: " + str(accID.id))


        data = db_session\
            .query(sa.func.year(Transfer.transferDateTime),
                   sa.func.month(Transfer.transferDateTime),
                   sa.func.sum(Transfer.amount).label('total'))\
            .filter_by(senderAccountId=str(accID.id))\
            .group_by(sa.func.year(Transfer.transferDateTime),
                      sa.func.month(Transfer.transferDateTime))\
            .all()

        result = []
        for entry in data:
            result.append((str(entry[0]) + "-" + str(entry[1]).zfill(2), entry[2]))

        return result
