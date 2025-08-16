from pydantic import BaseModel, EmailStr
from uuid import UUID
from src.entities.users import UserType
from database import datetime



class UserResponse(BaseModel):
    id: UUID
    email: EmailStr
    phone_no: int
    first_name: str
    last_name: str
    user_type: UserType


class PasswordChange(BaseModel):
    current_password: str
    new_password: str
    new_password: str

