from ultrasonics import *
from gate import *
from camera import *
from Button import *
from CameraMotor import *
from RPLCD import CharLCD
import RPi.GPIO as GPIO
import time    
import threading
import urllib.request
import json



#GPIO Mode (BOARD / BCM)
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)           #do not show any warnings

GPIO_Button = 24
GPIO_LDR = 16
GPIO_LED_IN = 18
GPIO_LED_OUT = 25

GPIO.setup(GPIO_LDR,GPIO.IN)     
GPIO.setup(GPIO_Button,GPIO.IN)     
GPIO.setup(GPIO_LDR,GPIO.OUT)     
GPIO.setup(GPIO_LDR,GPIO.OUT)
GPIO.setup(4,GPIO.OUT)

lcd = CharLCD(numbering_mode=GPIO.BCM ,cols=16, rows=2, pin_rs=27, pin_e=22, pins_data=[5, 6, 29, 26])     
previous_state = "PassOut"
current_state = "Idle"
mode = "Automatic"
gate_state = "Closed"
url = "http://dweet.io/get/latest/dweet/for/shantanu"
networkLock = 0
#s0 = Idle
#s1 = CheckCameraIn
#s2 = OpenGateIn
#s3 = PassIn
#s4 = CloseGate
#s5 = CheckCameraOut
#s6 = OpenGateOut
#s7 = PassOut
#s8 = Manual
#s9 = Network




def networkCommandChecker():   
    global networkLock
    while True:
        response = urllib.request.urlopen(url)
        data = json.loads(response.read().decode('utf-8'))
        status = data['with'][0]['content']['led']
        print('LED Status = ', status)

        if status == 'on':
            if current_state == "Idle":
                networkLock = 1     
            GPIO.output(4,True)
        else:
            networkLock = 0
            GPIO.output(4,False)
        
        time.sleep(2)


    GPIO.cleanup()




def button_pressed_callback(channel):
    global current_state
    global mode 
    global gate_state
    if current_state == "Idle":
        if Manual():
            print("you pressed key for 3 sec, manual mode on.") 
            if mode == "Manual": 
                CloseGate()
                gate_state = "Closed"
                current_state = "Idle"
                mode == "Automatic"
                lcd.clear()
                lcd.write_string(" Atomatic Mode!")
                    
            elif mode == "Automatic": 
                mode == "Manual"
                lcd.clear()
                lcd.write_string("  Manual Mode!")
        else :
            if mode == "Manual" :
                if  gate_state == "Closed" : 
                    OpenGate()
                    gate_state = "Open"
                elif  gate_state == "Open" : 
                    CloseGate()
                    gate_state = "Closed"


# def OpenManualWireless(Open):
#     global current_state
#     if current_state == "Idle":
#         if  Open : 
#             OpenGate()
#         else: 
#             CloseGate()




# netThread = threading.Thread(target=networkCommandChecker)
# netThread.start()

GPIO.add_event_detect(GPIO_Button, GPIO.RISING, callback=button_pressed_callback, bouncetime=100)

while 1:
    CheckUlt1()
    