from typing import Optional
from db import *
import uvicorn
from fastapi import FastAPI, status
from pymongo import MongoClient


app = FastAPI()


@app.post("/verified_home")
def verified_home(item: dict):
    #data = {address1:"",address2:"",state:"", zip5:"",email:""}
    if(item["response"]):
        data = {"address1":item["a1"],"address2":item["a2"],"state":item["admarea"], "zip5":item["postal"],email:""}
        add_property(data)
        raise NotImplemented
    print(item)


@app.post("/signup_user_data")
def signup_user_data(info: dict):
    #data = {first_name:"",last_name:"", email:"", phone_number:"", password:"", properties: []}
    data = info
    data["properties"] = []
    add_user(info)
    
    
    
    raise NotImplementedError
