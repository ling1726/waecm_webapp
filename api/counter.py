from flask import Blueprint, jsonify
from flask_jwt import jwt_required
from . import Counter
from . import db_session

counterAPI = Blueprint('counterAPI', __name__)

@counterAPI.route('/api/counter', methods=['GET'])
def getCounter():
    counter = db_session.query(Counter).first()
    if counter is None:
        counter = Counter()
        db_session.add(counter)
        db_session.commit()

    return jsonify(value=counter.value)


@counterAPI.route('/api/counter', methods=['POST'])
@jwt_required()
def incrementCounter():
    counter = db_session.query(Counter).first()
    counter.increment()
    db_session.commit()
    return jsonify(value=counter.value)



@counterAPI.route('/api/counter/reset', methods=['POST'])
@jwt_required()
def resetCounter():
    counter = db_session.query(Counter).first()
    counter.reset()
    db_session.commit()
    return jsonify(value=counter.value)

