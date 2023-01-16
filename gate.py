import RPi.GPIO as IO   
import time    
 
IO.setwarnings(False)           #do not show any warnings


IO.setmode (IO.BCM)         #we are programming the GPIO by BCM pin numbers. (PIN12 as ‘GPIO18’)


IO.setup(18,IO.OUT)           # initialize GPIO19 as an output.


p = IO.PWM(18,50)          #GPIO18 as PWM output, with 100Hz frequency




def OpenGate():
    print("Open Gate")
    p.start(0)             #generate PWM signal with 0% duty cycle
    print(" Welcome!")
    p.ChangeDutyCycle(10)
    # time.sleep(1)
    # p.stop() 
    print(" hello!")

def CloseGate():
    print("clse Gate")
    p.start(0)                              #generate PWM signal with 0% duty cycle
    p.ChangeDutyCycle(3)
    # time.sleep(1)
    # p.stop() 
    print(" bye!")
  

