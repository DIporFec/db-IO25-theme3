from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:368368368Kirill@127.0.0.1/db-IO25-theme3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)

class Role(db.Model):
    __tablename__ = 'Role'
    id = db.Column(db.Integer(), primary_key=True, autoincrement=True)
    name = db.Column(db.String(45), nullable=False)
    description = db.Column(db.String(45), nullable=False)
    permissions = db.Column(db.String(45), nullable=False)

class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(45))
    password = db.Column(db.String(45))
    roleid = db.Column(db.String(45))
    Role_id = db.Column(db.Integer, db.ForeignKey('Role.id'))

class Action(db.Model):
    __tablename__ = 'Action'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(45))
    description = db.Column(db.String(45))
    User_id = db.Column(db.Integer, db.ForeignKey('User.id'))

class PublicRequest(db.Model):
    __tablename__ = 'Public request'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(45))
    date = db.Column(db.String(45))
    Action_id = db.Column(db.Integer, db.ForeignKey('Action.id'))

class MediaData(db.Model):
    __tablename__ = 'Media data'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(45))
    fileType = db.Column(db.String(45))
    PublicRequest_id = db.Column(db.Integer, db.ForeignKey('Public request.id'))

class Permission(db.Model):
    __tablename__ = 'Permission'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(45))

class RolePermissions(db.Model):
    __tablename__ = 'Role permissions'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    Role_id = db.Column(db.Integer, db.ForeignKey('Role.id'))
    Permission_id = db.Column(db.Integer, db.ForeignKey('Permission.id'))

def check_db_connection():
    try:
        db.session.execute('SELECT 1')
        return True
    except:
        return False

def create_role(name, description, permissions):
    role = Role(name=name, description=description, permissions=permissions)
    db.session.add(role)
    db.session.commit()
def read_roles():
    return Role.query.all()

def update_role(role_id, name=None, description=None, permissions=None):
    role = Role.query.get(role_id)
    if role:
        if name:
            role.name = name
        if description:
            role.description = description
        if permissions:
            role.permissions = permissions
        db.session.commit()
    else:
        raise ValueError("Role not found")

def delete_role(role_id):
    role = Role.query.get(role_id)
    if role:
        db.session.delete(role)
        db.session.commit()
    else:
        raise ValueError("Role not found")