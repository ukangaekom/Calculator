from fastapi import HTTPException


# Delivery Error
class DeliveryError(HTTPException):
    """Base Exception for delivery related errors"""
    pass

class DeliveryNotFoundError(DeliveryError):
    def __init__(self, delivery_id=None):
        message = "Delivery not found" if delivery_id is None else f"Delivery with id {delivery_id} not found"
        super().__init__(status_code=404, detail=message)

        
class DeliverCreationError(DeliveryError):
    def __init__(self, error: str):
        super.__init__(status_code=500, detail=f"Failed to create delivery:{error}")









# Email Error




# Payment Error


# User Error

class UserError(HTTPException):
    """Base exception for user-related errors"""
    pass


class UserNotFoundError(UserError):
    
