import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(_file_), '..')))

from fastapi import depends, FastAPI, HTTPException
from sqlalchemy.orm import session

from sql_app import crud, models, schemas
from sql_app.database import sessionlocal, engine

models.base.metadata.create_all(bind=engine)


app = FastAPI()

def get_db():
    db= sessionlocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/ussers/", response_model=schemas.user)
def create_user(ussers: schemas.usercreate, db:session=depends(get_db)):
     db_user= crud.get_user_by_email(db,email=user_emails)
    if db_user:
        raise HTTPException(status_code=404, details= "emails already registered")
    return crud.create_user(db=db, user=user)



@app.get("/users/",response_model= list[schemas.user])
def read_user(skip:int=0, limit:int=100, db:session=depends(get_db)):
    users=crud.get_users(db,skip,limit=limit)
    return users

@app.get("/users/{user_id}",response_model=schemas.user)
def read_user(user_id:int,db:session=depends(get_db)):
    db_user=crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, details "user is not found")
    return db_user
    


@app.post("/users/{user_id}/item/",response_model=schemas.item)
def create_item_for_user(user_id:int, item:schemas.itemcreate,db:session=depend(get_db)):
    return  crud.create_item_user(db=db, item=item,user_id=user_id)
    
    

@app.get("/item/",response_model=list[schemas.item])
def read_item(skip:int=0, limit:int=100, db:session=depends(get_db)):
    item= crud.get_items(db,skip,limit=limit)
    return items
