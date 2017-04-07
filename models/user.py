from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from base import Base
import bcrypt

class User(Base):
    # table information declaration
    __tablename__ = "users"
    id = Column(Integer, primary_key = True)
    email = Column(String(254), nullable = False, unique = True)
    password = Column(String(100), nullable = False)
    balance = Column(Integer, nullable = False)
    limit = Column(Integer,nullable = False)
    notifications = relationship("Notification", back_populates = "user")  
    account = relationship("Account", back_populates = "user")


    # constructor - DONT initialize id
    def __init__(self, email, password, balance, limit):
        self.email = email 
        self.password = bcrypt.hashpw(password.encode('utf-8'),bcrypt.gensalt())
        self.balance = balance
        self.limit = limit

    def verify_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password.encode('utf-8'))

    # equivalent of java's toString() method
    def __str__(self):
        return "User(id='%s')" % self.id
