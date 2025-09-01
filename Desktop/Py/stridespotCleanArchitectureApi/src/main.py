from fastapi import FastAPI
from src.database.core import engine, Base
from src.entities.delivery import Delivery #Import models to register them
from src.entities.users import User #Import models to register them
from src.api import register_routes



app = FastAPI()
