from sqlalchemy import create_engine, exc, exists
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

def create_testdata():
    # check if data exists
    if db_session.query(exists().where(User.email=="maxmustermann@gmail.com")).scalar():
        return

    # insert Users
    account1 = Account("AT551000100000000001","BANKATW1")
    account2 = Account("AT551000100000000002","BANKATW1")
    account3 = Account("AT551000100000000003","BANKATW1")
    user1 = User("maxmustermann@gmail.com", "maxmustermann", 2437.23, 1000)
    user2 = User("gabimusterfrau@gmail.com", "gabimusterfrau", 503.45, 3000)
    user3 = User("erikatest@gmail.com", "erikatest", 23.53, 2000)
    account1.user = user1
    account2.user = user2
    account3.user = user3

    notification1 = Notification("Neuer Geldtransfer","Sie haben eine neue Zahlung erhalten",user1)
    notification2 = Notification("Neue Nachricht","Sie haben eine neue Nachricht erhalten",user1)
    notification3 = Notification("Passwortaenderung","Aufgrund eines Sicherheitsvorfall, bitte Ihr Passwort aendern",user1)
    notification4 = Notification("Aktualisierung der AGBs","Die AGBs wurden aktualisiert, bitte ueberpruefen Sie diese unter ....",user1)
    notification5 = Notification("Aktualisierung der AGBs","Die AGBs wurden aktualisiert, bitte ueberpruefen Sie diese unter ....",user2)
    notification6 = Notification("Aktualisierung der AGBs","Die AGBs wurden aktualisiert, bitte ueberpruefen Sie diese unter ....",user3)

    transfer1 = Transfer(1003.45,"2017-03-22 23:05:00","Ueberweisung 1",account1,account2,"Max Mustermann")
    transfer2 = Transfer(13.30,"2017-03-22 13:05:00","Ueberweisung 2",account2,account3,"Musterfrau")
    transfer3 = Transfer(9003.20,"2017-03-22 15:47:00","Ueberweisung 3",account2,account1,"Gabi Musterfrau")
    transfer4 = Transfer(904.40,"2017-03-22 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max")
    transfer5 = Transfer(5343.22,"2017-03-22 08:55:00","Ueberweisung 5",account3,account1,"Erika Test")
    transfer6 = Transfer(690.30,"2017-03-22 11:32:00","Ueberweisung 6",account3,account2,"Erika")
    transfer7 = Transfer(14.10,"2017-04-03 09:15:00","Ueberweisung 7",account1,account2,"Max Mustermann")
    transfer8 = Transfer(105.45,"2017-03-28 19:22:00","Ueberweisung 8",account1,account3,"Mustermann")


    tag1 = Tag("Freizeit")
    tag2 = Tag("Versicherung")
    tag3 = Tag("Haus")
    tag4 = Tag("Abonnements")

    transfer1.tags.append(tag1)
    transfer1.tags.append(tag4)
    transfer2.tags.append(tag2)
    transfer2.tags.append(tag3)
    transfer3.tags.append(tag1)
    transfer4.tags.append(tag2)
    transfer5.tags.append(tag3)
    transfer6.tags.append(tag4)
    transfer7.tags.append(tag1)

    db_session.add(user1)
    db_session.add(user2)
    db_session.add(user3)
    db_session.add(notification1)
    db_session.add(notification2)
    db_session.add(notification3)
    db_session.add(notification4)
    db_session.add(notification5)
    db_session.add(notification6)
    db_session.add(transfer1)
    db_session.add(transfer2)
    db_session.add(transfer3)
    db_session.add(transfer4)
    db_session.add(transfer5)
    db_session.add(transfer6)
    db_session.add(transfer7)
    db_session.add(transfer8)

    db_session.add(Transfer(904.40,"2017-02-22 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max"))
    db_session.add(Transfer(94.40,"2017-03-22 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max"))
    db_session.add(Transfer(9.20,"2017-04-02 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max"))
    db_session.add(Transfer(1002.40,"2017-01-22 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max"))
    db_session.add(Transfer(504.40,"2016-12-22 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max"))
    db_session.add(Transfer(94.40,"2016-10-12 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max"))
    db_session.add(Transfer(90.40,"2016-11-22 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max"))
    db_session.add(Transfer(24.40,"2017-03-13 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max"))
    db_session.add(Transfer(404.40,"2017-03-08 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max"))
    db_session.add(Transfer(14.40,"2016-09-22 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max"))
    db_session.add(Transfer(847.40,"2016-09-02 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max"))
    db_session.add(Transfer(104.40,"2016-11-15 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max"))
    db_session.add(Transfer(25.40,"2016-12-23 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max"))
    db_session.add(Transfer(98.40,"2016-12-24 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max"))
    db_session.add(Transfer(16.40,"2017-01-22 12:12:00","Ueberweisung 4",account1,account3,"Mustermann Max"))


    db_session.commit()
