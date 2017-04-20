from sqlalchemy import Column, Integer, String, ForeignKey, Table, Numeric
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.mysql import TIMESTAMP
from base import Base
import time

join_table = Table("transfersTags", Base.metadata, Column("transferId", Integer, ForeignKey("transfers.id")), Column("tagId", Integer, ForeignKey("tags.id")))

class Transfer(Base):
    # table information declaration
    __tablename__ = "transfers"
    id = Column(Integer, primary_key = True)
    amount = Column(Numeric(12,2), nullable = False)
    transferDateTime = Column(TIMESTAMP, nullable = False)
    comment = Column(String(500), nullable = True)
    tags = relationship("Tag", secondary = join_table)

    senderAccountId = Column(Integer, ForeignKey("accounts.id"))
    senderAccount = relationship("Account", back_populates = "outTransfers",foreign_keys=senderAccountId)
    recipientName = Column(String(200), nullable = False)

    recipientAccountId = Column(Integer, ForeignKey("accounts.id"))
    recipientAccount = relationship("Account", back_populates = "inTransfers",foreign_keys=recipientAccountId)
  
    # constructor - DONT initialize id
    def __init__(self, amount, transferDateTime, comment, senderAccount, recipientAccount, recipientName):
        self.amount = amount
        self.transferDateTime = transferDateTime
        self.comment = comment
        self.senderAccount = senderAccount
        self.recipientAccount = recipientAccount
        self.recipientName = recipientName

    def getSenderName(self):
        senderName = self.senderAccount.iban
        if self.senderAccount.user != None:
            senderName = self.senderAccount.user.getFullName()
        if self.senderAccount.identifier != None:
            senderName = self.senderAccount.identifier
        return senderName

    def getReadableDate(self):
        return self.transferDateTime.strftime('%Y-%m-%d')

    def getTime(self):
        return self.transferDateTime.strftime('%H:%M')

    def getTimestamp(self):
        return int(time.mktime(self.transferDateTime.timetuple()))*1000

    def __repr__(self):
        return ('Amount: %r' % (self.amount) +
                ' TransferDateTime: %r' % (self.transferDateTime) +
                ' Comment %r: ' % (self.comment) +
                ' SenderAccount: %r' % (self.senderAccount) +
                ' RecipientAccount: %r' % (self.recipientAccount) +
                ' RecipientName: %r' % (self.recipientName))
