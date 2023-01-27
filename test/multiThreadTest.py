import RPi.GPIO as IO   
import time    
from camera import *
import threading
import urllib.request
import json
import time


url = "http://dweet.io/get/latest/dweet/for/shantanu"



IO.setwarnings(False)           #do not show any warnings
IO.setmode (IO.BCM)         #we are programming the GPIO by BCM pin numbers. (PIN12 as ‘GPIO13’)
IO.setup(4,IO.OUT)
IO.setup(13,IO.OUT)           # initialize GPIO19 as an output.
p = IO.PWM(13,50)          #GPIO13 as PWM output, with 100Hz frequency

def networkCommandChecker():   
    while True:
        response = urllib.request.urlopen(url)
        data = json.loads(response.read().decode('utf-8'))
        status = data['with'][0]['content']['led']
        print('LED Status = ', status)

        if status == 'on':
            IO.output(4,True)
        else:
            IO.output(4,False)
        
        time.sleep(2)


    IO.cleanup()




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
    # p.stop() 
    # print(" bye!")
  



def main():
    netThread = threading.Thread(target=networkCommandChecker)
    netThread.start()
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

