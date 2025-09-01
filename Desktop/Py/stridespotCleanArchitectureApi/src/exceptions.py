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
    def __init__(self, user_id=None):
        message = "User not found" if user_id is None else f"User with id {user_id} not found"
        super.__init__(status_code=404, detail=message)
        

class PasswordMismatchError(UserError):
    def __init__(self):
        super().__init__(status_code=400, detail="New Password Do not Match") 
        
        
class InvalidPasswordError(UserError):
    def __init__(self):
        super().__init__(status_code=401, detail="Current Password is incorrect")
        
class AuthenticationError(HTTPException):
    def __init__(self, message:str ="Could not validate user"):
        super().__init__(status_code=401, detail=message) 
