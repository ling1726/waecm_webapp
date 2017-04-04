from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from base import Base

class Tag(Base):
    # table information declaration
    __tablename__ = "tags"
    id = Column(Integer, primary_key = True)
    title = Column(String(254), nullable = False)
  
    # constructor - DONT initialize id
    def __init__(self, title):
        self.title = title

