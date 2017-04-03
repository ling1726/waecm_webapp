from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from base import Base

class User(Base):
    # table information declaration
    __tablename__ = "users"
    id = Column(Integer, primary_key = True)
    username = Column(String(50), nullable = False)
    password = Column(String(100), nullable = False)
  
    # constructor - DONT initialize id
    def __init__(self, username, password):
        self.username = username
        self.password = password

    # equivalent of java's toString() method
    def __str__(self):
        return "User(id='%s')" % self.id
