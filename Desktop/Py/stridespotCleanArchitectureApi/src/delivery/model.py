from datetime import datetime
from typing import Optional
from uuid import UUID
from pydantic import BaseModel, ConfigDict
from src.entities.delivery import Delivery


class DeliverBase(BaseModel):
    