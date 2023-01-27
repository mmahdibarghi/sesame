import time
from picamera import PiCamera
import shutil
import RPi.GPIO as GPIO
import os
from openalpr import Alpr
import json
import requests


# PlatesList = ["786P0", "DEF456", "GHI789", "JKL012", "MNO345", "PQR678", "STU901", "VWX234", "YZA567", "BCD890"]
camera = PiCamera() #initialize camera
serverURL = 'http://192.168.157.23:4500/api/check'

hardCodePlate = 0





def takePhoto():
    time.sleep(1)
    camera.capture("./Pictures/img.jpg")
    original = r"./Pictures/img.jpg"
    target = "./history/img_" + str(time.time()) + ".jpg"
    shutil.copyfile(original, target)
    print("Taking Photo Done.")
    return



def recognizePlate():
    alpr = Alpr("eu", "/etc/openalpr/openalpr.conf", "/usr/share/openalpr/runtime_data/")
    if not alpr.is_loaded():
        print("Error loading OpenALPR")
        return -1
    results = alpr.recognize_file("./Pictures/img.jpg")
    resultJson = json.dumps(results, indent=4)
    # print(resultJson) #comment this line if you don't want to see the json
    if len(results["results"]) == 0:
        # print("No Plate detect!")
        return -1
    else:
        result = json.loads(resultJson)
        return result["results"][0]["plate"]

    

def validatePlate(plate):
    print("validate plate...")
    # validate = requests.get(serverURL, params={'plate': plate},timeout=2)
    try:
        print("send check request for Serever")
        validate = requests.get(serverURL, params={'plate': plate},timeout=2)
        if validate.status_code == 200:
            print("Plate is valid")
            return True
        else:
            print("Plate is invalid")
            return False
            
    except:
        return False
    

def CameraRecognized():
    global hardCodePlate
    plate = ""
    for i in range(3):
        takePhoto()
        plate = recognizePlate()
        # if hardCodePlate == 0:
        #     plate = "ABCDK123"
        # elif hardCodePlate == 1:
        #     plate = "ABCDK123"
        # else:
        #     plate = "ABCDK123"
        print(plate)
        hardCodePlate += 1
        result = validatePlate(plate)
        if result == True:
            break
        
    return result,plate
