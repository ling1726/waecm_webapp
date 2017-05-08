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

        data = []
        if interval == "monthly":
            data = self.getStatsPerMonth(str(accID.id))
        elif interval == "yearly":
            data = self.getStatsPerYear(str(accID.id))
        elif interval == "daily":
            data = self.getStatsPerDay(str(accID.id))

        print data


        return data

    def getStatsPerMonth(self, accID):
        data = db_session \
            .query(sa.func.year(Transfer.transferDateTime),
                   sa.func.month(Transfer.transferDateTime),
                   sa.func.sum(Transfer.amount).label('total')) \
            .filter_by(senderAccountId=accID) \
            .group_by(sa.func.year(Transfer.transferDateTime),
                      sa.func.month(Transfer.transferDateTime)) \
            .all()

        result = []
        for entry in data:
            result.append((str(entry[0]) + "-" + str(entry[1]).zfill(2), entry[2]))
        return result

    def getStatsPerYear(self, accID):
        data = db_session \
            .query(sa.func.year(Transfer.transferDateTime),
                   sa.func.sum(Transfer.amount).label('total')) \
            .filter_by(senderAccountId=accID) \
            .group_by(sa.func.year(Transfer.transferDateTime)) \
            .all()

        result = []

        for entry in data:
            result.append((str(entry[0]), entry[1]))

        return result

    def getStatsPerDay(self, accID):
        data = db_session \
            .query(sa.func.year(Transfer.transferDateTime),
                   sa.func.month(Transfer.transferDateTime),
                   sa.func.day(Transfer.transferDateTime),
                   sa.func.sum(Transfer.amount).label('total')) \
            .filter_by(senderAccountId=accID) \
            .group_by(sa.func.year(Transfer.transferDateTime),
                      sa.func.month(Transfer.transferDateTime),
                      sa.func.day(Transfer.transferDateTime)) \
            .all()

        result = []
        for entry in data:
            result.append((str(entry[0]) + "-" + str(entry[1]).zfill(2) + "-" + str(entry[2]).zfill(2), entry[3]))
        return result
