from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Counter(Base):
    __tablename__ = 'counters'
    id = Column(Integer, primary_key = True)
    value = Column(Integer)

    def __init__(self, value = 0):
        self.value = value

    def increment(self):
        self.value += 1

    def reset(self):
        self.value = 0


