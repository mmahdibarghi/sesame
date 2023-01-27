#Libraries
import RPi.GPIO as GPIO
import time
 
#GPIO Mode (BOARD / BCM)
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)           #do not show any warnings


#set GPIO Pins
GPIO_TRIGGER_IN = 15
GPIO_ECHO_IN = 14
GPIO_TRIGGER_OUT = 21
GPIO_ECHO_OUT = 20
 
#set GPIO direction (IN / OUT)
GPIO.setup(GPIO_TRIGGER_IN, GPIO.OUT)
GPIO.setup(GPIO_ECHO_IN, GPIO.IN)
GPIO.setup(GPIO_TRIGGER_OUT, GPIO.OUT)
GPIO.setup(GPIO_ECHO_OUT, GPIO.IN)
 

def distanceOut():
    # set Trigger to HIGH
    GPIO.output(GPIO_TRIGGER_OUT, True)
 
    # set Trigger after 0.01ms to LOW
    time.sleep(0.00001)
    GPIO.output(GPIO_TRIGGER_OUT, False)
 
    StartTime = time.time()
    StopTime = time.time()
 
    # save StartTime
    while GPIO.input(GPIO_ECHO_OUT) == 0:
        StartTime = time.time()
 
    # save time of arrival
    while GPIO.input(GPIO_ECHO_OUT) == 1:
        StopTime = time.time()
 
    # time difference between start and arrival
    TimeElapsed = StopTime - StartTime
    # multiply with the sonic speed (34300 cm/s)
    # and divide by 2, because there and back
    distance = (TimeElapsed * 34300) / 2
 
    return distance

def distanceIn():
    # set Trigger to HIGH
    GPIO.output(GPIO_TRIGGER_IN, True)
 
    # set Trigger after 0.01ms to LOW
    time.sleep(0.00001)
    GPIO.output(GPIO_TRIGGER_IN, False)
 
    StartTime = time.time()
    StopTime = time.time()
 
    # save StartTime
    while GPIO.input(GPIO_ECHO_IN) == 0:
        StartTime = time.time()
 
    # save time of arrival
    while GPIO.input(GPIO_ECHO_IN) == 1:
        StopTime = time.time()
 
    # time difference between start and arrival
    TimeElapsed = StopTime - StartTime
    # multiply with the sonic speed (34300 cm/s)
    # and divide by 2, because there and back
    distance = (TimeElapsed * 34300) / 2
 
    return distance

def switch(dist):
    if 0<dist<110:
       return True
    else:
        return False
  
def CheckUlt1():

    distanceVectorIn = []
    for i in range(5):
          distIn = distanceIn()
          distanceVectorIn.append(distIn)
          time.sleep(0.05)
    avgin = sum(distanceVectorIn)/len(distanceVectorIn)
    return switch(avgin)

def CheckUlt2():

    distanceVectorOut = []
    for i in range(5):
          distOut = distanceOut()
          distanceVectorOut.append(distOut)
          time.sleep(0.05)
    avgout = sum(distanceVectorOut)/len(distanceVectorOut)
    return switch(avgout)

