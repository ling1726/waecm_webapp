from werkzeug.security import safe_str_cmp
from models import User

def authenticate(username, password):
    user = User.query.filter_by(email=username).first()
    if user.verify_password(password):
        return user

def identity(payload):
    userId = payload['identity']
    if userId == user.id: return user.id
    return None
