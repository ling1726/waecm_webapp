from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from base import Base

class Account(Base):
    # table information declaration
    __tablename__ = "accounts"
    id = Column(Integer, primary_key = True)
    iban = Column(String(34), nullable = False)
    bic = Column(String(11), nullable = False)
    
    userId = Column(Integer, ForeignKey("users.id"))
    user = relationship("User", back_populates="account")
    
    outTransfers = relationship("Transfer", back_populates="senderAccount",foreign_keys='Transfer.senderAccountId')  
    inTransfers = relationship("Transfer", back_populates = "recipientAccount",foreign_keys='Transfer.recipientAccountId')

    # constructor - DONT initialize id
    def __init__(self, iban, bic):
        self.iban = iban
        self.bic = bic

