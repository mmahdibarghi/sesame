#Libraries
import RPi.GPIO as GPIO
import time

#GPIO Mode (BOARD / BCM)
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)           #do not show any warnings

#set GPIO Pins
GPIO_Button = 17
# GPIO_LED = 23

#set GPIO direction (IN / OUT)
GPIO.setup(GPIO_Button, GPIO.IN)
# GPIO.setup(GPIO_LED, GPIO.OUT)

def Manual():
    print("press key!")
    StartTime = time.time()

    while GPIO.input(GPIO_Button) == 1:
        pass


    StopTime = time.time()

    TimeElapsed = StopTime - StartTime

    if TimeElapsed >= 1:
        return True
    else: 
        return False

# led = 0
# GPIO.output(GPIO_LED, False)

# while 1:
#     if GPIO.input(GPIO_Button) == 1:
#         StartTime = time.time()

#         while GPIO.input(GPIO_Button) == 1:()

#         StopTime = time.time()

#         TimeElapsed = StopTime - StartTime

#         if TimeElapsed >= 2:
#             if led == 1:
#                 GPIO.output(GPIO_LED, False)
#                 led = 0
#             else : 
#                 GPIO.output(GPIO_LED, True)
#                 led = 1

