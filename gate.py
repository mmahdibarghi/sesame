import RPi.GPIO as IO   
import time    

IO.setwarnings(False)           #do not show any warnings
IO.setmode (IO.BCM)        
IO.setup(12,IO.OUT)           # initialize GPIO12 as an output.
p = IO.PWM(12,50)          #GPIO12 as PWM output, with 50Hz frequency




def OpenGate():
    global gate_state
    gate_state = "Open"
    print("Open Gate")
    p.start(0)             #generate PWM signal with 0% duty cycle
    p.ChangeDutyCycle(11)
    time.sleep(1)
    p.ChangeDutyCycle(0)
    

def CloseGate():
    print("close Gate")
    global gate_state
    gate_state = "Closed"
    p.start(0)              #generate PWM signal with 0% duty cycle
    p.ChangeDutyCycle(5)
    time.sleep(1)
    p.ChangeDutyCycle(0)
  
