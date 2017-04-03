from sqlalchemy import create_engine, exc
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker
from models import *
import time

engine = create_engine('mysql+pymysql://waecmuser:waecmpassword@127.0.0.1/waecm', convert_unicode = True)
db_session = scoped_session(sessionmaker(autocommit = False, autoflush = False, bind = engine))

#Base = declarative_base()
#Base.query = db_session.query_property()

def init_db():
    # try until we get a stable connection
    while(True):
        try:
            engine.connect()
            break
        except exc.SQLAlchemyError:
            time.sleep(1)
            print 'error connecting to the database: [', exc.SQLAlchemyError, '] trying again' 

    Base.query = db_session.query_property()
    Base.metadata.create_all(bind = engine)
