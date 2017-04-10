from sqlalchemy import Column, Integer, Float, String, ForeignKey, Table, Numeric, types
from sqlalchemy.orm import relationship
from sqlalchemy.sql.expression import cast
from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy.dialects.mysql import TIMESTAMP
from base import Base

join_table = Table("transfersTags", Base.metadata, Column("transferId", Integer, ForeignKey("transfers.id")), Column("tagId", Integer, ForeignKey("tags.id")))

# Base = declarative_base()

# class CastToFloatType(types.TypeDecorator):
#     '''Converts stored Decimal values to Floats via CAST operation
#     '''
#     impl = types.Numeric(12,2)
#     def column_expression(self, col):
#         return cast(col, Float)

# TODO find solution for amount not being float -> as float is baaaaad for money (precision wise)

class Transfer(Base):
    # table information declaration
    __tablename__ = "transfers"
    id = Column(Integer, primary_key = True)
    amount = Column(Float, nullable = False)
    timestamp = Column(TIMESTAMP, nullable = False)
    comment = Column(String(500), nullable = True)
    tags = relationship("Tag", secondary = join_table)

    senderAccountId = Column(Integer, ForeignKey("accounts.id"))
    senderAccount = relationship("Account", back_populates = "outTransfers",foreign_keys=senderAccountId)
    senderName = Column(String(200), nullable = False)

    recipientAccountId = Column(Integer, ForeignKey("accounts.id"))
    recipientAccount = relationship("Account", back_populates = "inTransfers",foreign_keys=recipientAccountId)
  
    # constructor - DONT initialize id
    def __init__(self, amount, timestamp, comment, senderAccount, recipientAccount, senderName):
        self.amount = amount
        self.timestamp = timestamp
        self.comment = comment
        self.senderAccount = senderAccount
        self.recipientAccount = recipientAccount
        self.senderName = senderName

