import RPi.GPIO as IO   
import time    

IO.setwarnings(False)           #do not show any warnings
IO.setmode (IO.BCM)         #we are programming the GPIO by BCM pin numbers. (PIN33 as ‘GPIO13’)
IO.setup(13,IO.OUT)           # initialize GPIO13 as an output.
p = IO.PWM(13,50)          #GPIO13 as PWM output, with 50Hz frequency


def inputScanner():
    p.start(0)             #generate PWM signal with 0% duty cycle
    p.ChangeDutyCycle(7)
    time.sleep(0.5)
    p.ChangeDutyCycle(0)
  

def outputScanner():
    p.start(0)             #generate PWM signal with 0% duty cycle
    p.ChangeDutyCycle(16)
    time.sleep(0.5)
    p.ChangeDutyCycle(0)
