#Libraries
import RPi.GPIO as GPIO
import time

#GPIO Mode (BOARD / BCM)
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)           #do not show any warnings

#set GPIO Pins
GPIO_Button = 17

#set GPIO direction (IN / OUT)
GPIO.setup(GPIO_Button, GPIO.IN)

def Manual():
    print("press key!")
    StartTime = time.time()

    while GPIO.input(GPIO_Button) == 1:
        pass


    StopTime = time.time()

    TimeElapsed = StopTime - StartTime

    if TimeElapsed >= 3:
        return True
    else: 
        return False
