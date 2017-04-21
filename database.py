from sqlalchemy import create_engine, exc, exists
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker
from models import *
import time, os

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
    # drop and create behavious if in dev mode 
    if os.environ['DEV'] == 'true':
        Base.metadata.drop_all(bind = engine) 
    Base.metadata.create_all(bind = engine)

def create_testdata():
    # check if data exists
    if db_session.query(exists().where(User.email=="maxmustermann@gmail.com")).scalar():
        return

    # insert Users
    account1 = Account("AT551000100000000001","BANKATW1")
    account2 = Account("AT551000100000000002","BANKATW1")
    account3 = Account("AT551000100000000003","BANKATW1")
    account4 = Account("AT331000100000000004", "BANKATW1", 'Interspar')

    user1 = User("maxmustermann@gmail.com", "maxmustermann", 2437.23, 1000, 'Max', 'Mustermann')
    user2 = User("gabimusterfrau@gmail.com", "gabimusterfrau", 503.45, 3000, 'Gabi', 'Musterfrau')
    user3 = User("erikatest@gmail.com", "erikatest", 23.53, 2000, 'Erika', 'Test')
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
    transfer9 = Transfer(105.45,"2017-02-28 19:22:00","Ueberweisung 9",account2,account4,"Interspar Wien Mitte")
    transfer10 = Transfer(10.45,"2017-01-28 19:22:00","Ueberweisung 10",account1,account4,"Interspar Meilding")
    transfer11 = Transfer(23.54,"2017-02-28 19:22:00","Ueberweisung 11",account2,account4,"Interspar")
    transfer12 = Transfer(69.33,"2017-03-11 19:22:00","Ueberweisung 12",account3,account4,"Interspar Pronto")
    transfer13 = Transfer(5.32,"2017-03-16 19:22:00","Ueberweisung 13",account1,account4,"Interspar")
    transfer14 = Transfer(89.99,"2017-03-03 19:22:00","Ueberweisung 14",account2,account4,"Interspar Karlsplatz")
    transfer15 = Transfer(44.20,"2017-03-22 19:22:00","Ueberweisung 15",account3,account4,"Interspar Hauptbahnhof")
    transfer16 = Transfer(33.24,"2017-01-5 19:22:00","Ueberweisung 16",account1,account4,"Interspar Pronto")
    transfer17 = Transfer(37.27,"2017-02-14 19:22:00","Ueberweisung 17",account2,account4,"Interspar Pronto")
    transfer18 = Transfer(107.34,"2017-04-17 19:22:00","Ueberweisung 18",account3,account4,"Interspar Gourmet")
    transfer19 = Transfer(22.99,"2017-03-17 19:22:00","Ueberweisung 19",account1,account4,"Interspar Gourmet")


    tag1 = Tag("Leisure")
    tag2 = Tag("Insurance")
    tag3 = Tag("Accomodation")
    tag4 = Tag("Subscriptions")
    tag5 = Tag("Shopping")

    transfer1.tags.append(tag1)
    transfer1.tags.append(tag4)
    transfer2.tags.append(tag2)
    transfer2.tags.append(tag3)
    transfer3.tags.append(tag1)
    transfer4.tags.append(tag2)
    transfer5.tags.append(tag3)
    transfer6.tags.append(tag4)
    transfer7.tags.append(tag1)
    transfer9.tags.append(tag5)
    transfer10.tags.append(tag5)
    transfer11.tags.append(tag5)
    transfer12.tags.append(tag5)
    transfer13.tags.append(tag5)
    transfer14.tags.append(tag5)
    transfer15.tags.append(tag5)
    transfer16.tags.append(tag5)
    transfer17.tags.append(tag5)
    transfer18.tags.append(tag5)

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
    db_session.add(transfer9)
    db_session.add(transfer10)
    db_session.add(transfer11)
    db_session.add(transfer12)
    db_session.add(transfer13)
    db_session.add(transfer14)
    db_session.add(transfer15)
    db_session.add(transfer16)
    db_session.add(transfer17)
    db_session.add(transfer18)
    db_session.add(transfer19)

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

