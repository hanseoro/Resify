import certifi
from pymongo import MongoClient

uri = "mongodb+srv://ihaccess:KBuXDOHcjYKNsJJ6@cluster0.zlaepnf.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri,tlsCAFile=certifi.where())
db = client["Resify"]
users_col = db["users"]

users_sample= {"first_name":"alex", "last_name":"john", "email":"alexjohn@yahoo.com", 
                   "phone_number":"912391239", "password":"2913asdkjA", "properties":[]}
properties_sample = {"address1":"81 Campus dr", "address2": "43", "state": "CA", "zip5": "92143"}
users_sample2 = {"first_name":"James", "last_name":"Rish", "email":"jamesrich@yahoo.com", 
                   "phone_number":"2931312", "password":"sdaJ9231A", "properties":[]}
properties_sample2 = {"address1":"32 Crossgarve", "address2": "", "state": "KA", "zip5": "43123"}

def add_property(data: dict):
    """Adds a property to database and adds that property
    to the users list of owned proeprties"""
    #data = {address1:"",address2:"",state:"", zip5:"",email:""}
    properties_insert = {"address1":data["address1"], "address2": data["address2"], 
                         "state": data["state"], "zip5":data["zip5"]} 
    new_property_id = db["property"].insert_one(properties_insert).inserted_id

    users_col.update_one({"email":data["email"]}, {'$push': {"properties":new_property_id}})



if __name__ == "__main__":
    
    #props = users_col.find_one({"first_name":"James"}, {"properties":1})
    #print(db["property"].find_one({"_id" : property_id}))
    add_property_test = {"address1":"99 Lovelane","address2":"","state":"KS", "zip5":"12312","email":"efkkl@yahoo.com"}
    add_property(add_property_test)
   