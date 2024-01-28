from typing import Optional
from db import *
import uvicorn
from fastapi import FastAPI, status
from pymongo import MongoClient
from uuid import uuid4

app = FastAPI()


@app.post("/verified_home")
def verified_home(item: dict):
    #data = {address1:"",address2:"",state:"", zip5:"",email:""}
    if(item["response"]):
        data = {"address1":item["a1"],"address2":item["a2"],"state":item["admarea"], "zip5":item["postal"],email:""}
        add_property(data)
    print(item)


@app.post("/signup_user_data")
def signup_user_data(info: dict):
    #data = {first_name:"",last_name:"", email:"", phone_number:"", password:"", properties: []}
    data = info
    data["properties"] = []
    add_user(info)
    

@app.post("/generate_certificate")
def generate_certificate(user_email: str):
    token = uuid4()
    add_token(user_email, token)
    return {"token": token}

@app.post("/check_certificate")
def check_certificate(token: str):
    house_data = check_token(token)
    return house_data