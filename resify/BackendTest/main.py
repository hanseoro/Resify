from typing import Optional

import uvicorn
from fastapi import FastAPI, status
from pymongo import MongoClient


app = FastAPI()


@app.post("/verified_home")
def verified_home(item: dict):
    # Access data using item.key1, item.key2
    # Do something with the data
    #print(type(item))
    print(item)
    #return {"message": "Data received successfully"}

@app.post("/signup_user_data")
def signup_user_data(info: dict):

    raise NotImplementedError
