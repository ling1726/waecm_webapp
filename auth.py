from werkzeug.security import safe_str_cmp
from models import User

user = User(1, 'user', 'password')

def authenticate(username, password):
    if username == user.username and safe_str_cmp(user.password.encode('utf-8'), password.encode('utf-8')):
        return user

def identity(payload):
    userId = payload['identity']
    if userId == user.id: return user.id
    return None
