from fastapi import APIRouter, status, Depends
from uuid import UUID
from src.database.core import DbSession
from . import models
from . import services
from src.auth.service import CurrentUser

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)



@router.get("/me", response_model=models.UserRespons)
def get_current_user(current_user: CurrentUser, db: DbSession):
    return services.get_user_by_id(db, current_user.get_uuid())


@router.put("/change-password", status_code=status.HTTP_200_OK)
def change_password(
    password_change: models.PasswordChange,
    db: DbSession, # type: ignore
    current_user: CurrentUser = Depends()
):
    services.change_password(db, current_user.get_uuid(), password_change)