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
    senderName = Column(String(200), nullable = False)

    recipientAccountId = Column(Integer, ForeignKey("accounts.id"))
    recipientAccount = relationship("Account", back_populates = "inTransfers",foreign_keys=recipientAccountId)
  
    # constructor - DONT initialize id
    def __init__(self, amount, transferDateTime, comment, senderAccount, recipientAccount, senderName):
        self.amount = amount
        self.transferDateTime = transferDateTime
        self.comment = comment
        self.senderAccount = senderAccount
        self.recipientAccount = recipientAccount
        self.senderName = senderName

    def getRecipientName(self):
        recipientName = self.recipientAccount.iban
        if self.recipientAccount.user != None:
            recipientName = self.recipientAccount.user.getFullName()
        if self.recipientAccount.identifier != None:
            recipientName = self.recipientAccount.identifier
        return recipientName

    def getReadableDate(self):
        return self.transferDateTime.strftime('%Y-%m-%d')

    def getTime(self):
        return self.transferDateTime.strftime('%H:%M')

    def getTimestamp(self):
        return int(time.mktime(self.transferDateTime.timetuple()))*1000
