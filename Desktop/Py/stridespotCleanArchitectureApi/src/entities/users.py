from sqlalchemy import Column, String
from sqlachemy.dialects.postgresql import UUID
import uuid
from enum import Enum
from ..database.core import Base




class UserType(Enum):
    Vendor = "vendor"
    User = "user"
    Transporter = "driver"
    Worker = "worker"
    Contractor = "contract"
    Technicians = "technician"


class User(Base):
    __tablename__ = "users"
    
    id = Column(as_uuid=True, primary_key=True, default=uuid.uuid4)
    phone_number = Column(int, unique=True, nullable=True)
    email = Column(String, unique=True, nullable=False)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    user_type = Column(Enum(UserType), nullable=False, default=UserType.user)
    password_hash = Column(String, nullable=False)
    
    
    
    def __repr__(self):
        return f'''<User(
            email={self.email},
            phone_number={self.phone_number},
            first_name={self.first_name},
            last_name={self.last_name},
            user_type={self.user_type}
            )>'''