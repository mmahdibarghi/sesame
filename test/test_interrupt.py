#Libraries
import RPi.GPIO as GPIO
import time

#GPIO Mode (BOARD / BCM)
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)           #do not show any warnings

#set GPIO Pins
GPIO_Button = 24
GPIO_LED = 23

#set GPIO direction (IN / OUT)
GPIO.setup(GPIO_Button, GPIO.IN)
GPIO.setup(GPIO_LED, GPIO.OUT)

def Manual():
    StartTime = time.time()

    while GPIO.input(GPIO_Button) == 1: ()

    StopTime = time.time()

    TimeElapsed = StopTime - StartTime

    if TimeElapsed >= 3:
        return True
    else: return False

def button_pressed_callback(channel):
        if Manual(): 
           GPIO.output(GPIO_LED, True)
        else :
           GPIO.output(GPIO_LED, False)
    
GPIO.add_event_detect(GPIO_Button, GPIO.RISING, callback=button_pressed_callback, bouncetime=100)
while 1:()