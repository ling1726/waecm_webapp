from sqlalchemy import Column, Integer, Float, String, ForeignKey
from sqlalchemy.orm import relationship
from base import Base
import bcrypt

class User(Base):
    # table information declaration
    __tablename__ = "users"
    id = Column(Integer, primary_key = True)
    firstName  = Column(String(200), nullable = False)
    lastName = Column(String(200), nullable = False)
    email = Column(String(254), nullable = False, unique = True)
    password = Column(String(100), nullable = False)
    balance = Column(Float, nullable = False)
    limit = Column(Float,nullable = False)
    notifications = relationship("Notification", back_populates = "user")  
    account = relationship("Account", back_populates = "user")


    # constructor - DONT initialize id
    def __init__(self, email, password, balance, limit, firstName, lastName):
        self.email = email 
        self.password = bcrypt.hashpw(password.encode('utf-8'),bcrypt.gensalt())
        self.balance = balance
        self.limit = limit
        self.firstName = firstName
        self.lastName = lastName

    def verify_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password.encode('utf-8'))

    def getFullName(self):
        return self.firstName + ' ' + self.lastName

    # equivalent of java's toString() method
    def __str__(self):
        return "User(id='%s')" % self.id
