from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from base import Base

class Notification(Base):
    # table information declaration
    __tablename__ = "notifications"
    id = Column(Integer, primary_key = True)
    title = Column(String(254), nullable = False)
    content = Column(String(500), nullable = False)
    
    userId = Column(Integer, ForeignKey("users.id"))
    user = relationship('User', back_populates = 'notifications', lazy = 'select') 
 
    # constructor - DONT initialize id
    def __init__(self, title, content, user):
        self.title = title
        self.content = content
        self.user = user

    # equivalent of java's toString() method
    def __str__(self):
        return "User(id='%s')" % self.id
