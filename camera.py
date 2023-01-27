import time
from picamera import PiCamera
import shutil
import RPi.GPIO as GPIO
import os
from openalpr import Alpr
import json
import requests


camera = PiCamera() #initialize camera
serverURL = 'http://192.168.157.23:4500/api/check'


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
    plate = ""
    for i in range(3):
        takePhoto()
        plate = recognizePlate()
        print(plate)
        result = validatePlate(plate)
        if result == True:
            break
        
    return result,plate
