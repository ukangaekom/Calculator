from sqlalchemy import Column, String, Boolean, DateTime, ForeignKey, Enum
from sqlalchemy.dialects.postgresql import UUID, ARRAY
import uuid
from datetime import datetime, timezone
import enum
from ..database.core import Base




class Delivery(Base):
    __tablename__ = "delivery"
    
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    sender= Column(UUID(as_uuid=True), ForeignKey('users.id'), nullable=False)
    receiver = Column(int,nullable=False)
    transporter = Column(UUID(as_uuid=True), ForeignKey('users.id'), nullable=True)
    description = Column(String, nullable=False)
    created_at = Column(DateTime, nullable=False, default=lambda: datetime.now(timezone))
    source_location = Column(String,nullable=False) #This will be based on google map
    delivery_location = Column(String, nullable=False)
    pickup_accepted = Column(DateTime, nullable=True)
    pickup_delivered = Column(DateTime, nullable=True)
    
    
    
    def __repr__(self):
        return f'''<Delivery(
            sender={self.sender},
            receiver={self.receiver},
            transporter={self.transporter},
            description={self.description},
            created_at={self.created_at},
            source_location={self.source_location},
            delivery_location={self.delivery_location},
            pickup_accepted={self.pickup_accepted},
            pickup_delivered={self.pickup_delivered}
            )>'''
