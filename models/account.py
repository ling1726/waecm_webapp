from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from base import Base

class Account(Base):
    # table information declaration
    __tablename__ = "accounts"
    id = Column(Integer, primary_key = True)
    iban = Column(String(34), nullable = False)
    bic = Column(String(11), nullable = False)
    identifier = Column(String(50), nullable = True)
    
    userId = Column(Integer, ForeignKey("users.id"))
    user = relationship("User", uselist = False, back_populates="account")
    
    outTransfers = relationship("Transfer", back_populates="senderAccount",foreign_keys='Transfer.senderAccountId', lazy='dynamic')  
    inTransfers = relationship("Transfer", back_populates = "recipientAccount",foreign_keys='Transfer.recipientAccountId')

    # constructor - DONT initialize id
    def __init__(self, iban, bic, identifier = None):
        self.iban = iban
        self.bic = bic
        self.identifier = identifier

