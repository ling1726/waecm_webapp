from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from base import Base

class Tag(Base):
    # table information declaration
    __tablename__ = "tags"
    id = Column(Integer, primary_key = True)
    title = Column(String(254), nullable = False)
    color = Column(String(100), nullable = True)
    icon = Column(String(100), nullable = True)
  
    # constructor - DONT initialize id
    def __init__(self, title, color = None, icon = None):
        self.title = title
        self.color = color
        self.icon = icon

