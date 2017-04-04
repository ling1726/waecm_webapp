from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from base import Base

class User(Base):
    # table information declaration
    __tablename__ = "users"
    id = Column(Integer, primary_key = True)
    email = Column(String(254), nullable = False)
    password = Column(String(100), nullable = False)
    balance = Column(Integer, nullable = False)
    limit = Column(Integer,nullable = False)
    notifications = relationship("Notification", back_populates = "user")  
    account = relationship("Account", back_populates = "user")

    # constructor - DONT initialize id
    def __init__(self, username, password, balance, limit, account):
        self.username = username
        self.password = password
        self.balance = balance
        self.account = account
        self.limit = limit

    # equivalent of java's toString() method
    def __str__(self):
        return "User(id='%s')" % self.id
