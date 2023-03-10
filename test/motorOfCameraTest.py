import RPi.GPIO as IO   
import time    
from camera import *
IO.setwarnings(False)           #do not show any warnings


IO.setmode (IO.BCM)         #we are programming the GPIO by BCM pin numbers. (PIN13 as ‘GPIO13’)


IO.setup(13,IO.OUT)           # initialize GPIO19 as an output.


p = IO.PWM(13,50)          #GPIO13 as PWM output, with 100Hz frequency




def inputScanner():
    print("in")
    p.start(0)             #generate PWM signal with 0% duty cycle
    # print(" Welcome!")
    p.ChangeDutyCycle(4)
    time.sleep(0.5)
    p.ChangeDutyCycle(0)
    # p.stop() 
    # print(" hello!")

def outputScanner():
    print("out")
    p.start(0)                              #generate PWM signal with 0% duty cycle
    p.ChangeDutyCycle(7)
    time.sleep(0.5)
    p.ChangeDutyCycle(0)
  



def main():
    while 1:
        outputScanner()
        time.sleep(0.5)
        CameraRecognized()
        time.sleep(1)
        inputScanner()
        time.sleep(0.5)
        CameraRecognized()
        time.sleep(1)

main()