import time
from picamera import PiCamera
import shutil
import RPi.GPIO as GPIO
import os
from openalpr import Alpr
import json



PlatesList = ["786P0", "DEF456", "GHI789", "JKL012", "MNO345", "PQR678", "STU901", "VWX234", "YZA567", "BCD890"]






def takePhoto():
    camera = PiCamera()
    # time.sleep(2)
    camera.capture("./Pictures/img.jpg")
    original = r"./Pictures/img.jpg"
    target = "./history/img_" + str(time.time()) + ".jpg"
    shutil.copyfile(original, target)
    print("Taking Photo Done.")
    return



def recognizePlate():
    alpr = Alpr("us", "/etc/openalpr/openalpr.conf", "/usr/share/openalpr/runtime_data/")
    if not alpr.is_loaded():
        print("Error loading OpenALPR")
        return -1
    results = alpr.recognize_file("./Pictures/lp.jpg")
    resultJson = json.dumps(results, indent=4)
    result = json.loads(resultJson)
    return result["results"][0]["plate"]

    

def validatePlate(plate):
    if plate in PlatesList:
        print("Plate is valid")
        return True
    else:
        print("Plate is invalid")
        return False
    

def CameraRecognized():
    takePhoto()
    plate = recognizePlate()
    print(plate)
    return validatePlate(plate)
