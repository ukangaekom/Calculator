from fastapi import FastAPI
from .database.core import engine, Base
from .entities.todo import Todo #Import models to register them
from .entities.user import User #Import models to register them
from .api import register_routes



app = FastAPI()
