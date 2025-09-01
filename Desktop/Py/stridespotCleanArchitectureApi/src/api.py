from fastapi import FastAPI
from src.auth.controller import router as auth_router
# from src.delivery.controller import router as delivery_router
# from src.email.controller import router as email_router
# from src. payment.controller import router as payment_router
from src.users.controller import router as users_router


def register_routes(app: FastAPI):
    app.include_router(auth_router)
    app.include_router(delivery_router)
    app.include_router(email_router)
    app.include_router(payment_router)
    app.include_router(users_router)
