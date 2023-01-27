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



GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)           #do not show any warnings

GPIO_Button = 17
GPIO_LDR = 16
GPIO_LED_IN = 23
GPIO_LED_OUT = 25

GPIO.setup(GPIO_LDR,GPIO.IN)     
GPIO.setup(GPIO_Button,GPIO.IN)     
GPIO.setup(GPIO_LED_IN,GPIO.OUT)     
GPIO.setup(GPIO_LED_OUT,GPIO.OUT)

lcd = CharLCD(numbering_mode=GPIO.BCM ,cols=16, rows=2, pin_rs=27, pin_e=22, pins_data=[5, 6, 19, 26]) 
innerPlates = []    
previous_state = "PassOut"
current_state = "Idle"
mode = "Automatic"
gate_state = "Closed"
gateCheckerurl = "http://dweet.io/get/latest/dweet/for/gateDoorChecker"
lockCheckerURl = "http://dweet.io/get/latest/dweet/for/manualSesame"
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
    global gate_state
    global mode
    while True:
        response = urllib.request.urlopen(lockCheckerURl)
        data = json.loads(response.read().decode('utf-8'))
        status = data['with'][0]['content']['manual']
        if mode == 'Automatic':
            if status == 'fo32FNLV64KL913VRN16FELn':
                networkLock = 1 
                gateResponse = urllib.request.urlopen(gateCheckerurl)
                gateData = json.loads(gateResponse.read().decode('utf-8'))
                gateStatus = gateData['with'][0]['content']['gate']
                if gateStatus == 'oTBBTSemsadrvmervvGate140220222023BTBBTBn':   
                    gate_state = "Open"    
                    OpenGate()
                else:
                    gate_state = "Closed"
                    CloseGate()
            else:
                networkLock = 0
            
        time.sleep(2)


   



def button_pressed_callback(channel):
    global current_state
    global mode 
    global gate_state
    
    if Manual():
        print("you pressed key for 3 sec, manual mode on.") 
        if mode == "Manual": 
            if gate_state == "Open":
                print("please close the gate first!")
                lcd.clear()
                lcd.write_string("close the gate!")
                time.sleep(2)
                lcd.clear()
            elif gate_state == "Closed":
                mode = "Automatic"
                lcd.clear()
                lcd.write_string(" Atomatic Mode!")
                time.sleep(2)
                lcd.clear()
                
                
        elif mode == "Automatic": 
            mode = "Manual"
            lcd.clear()
            lcd.write_string("  Manual Mode!")
            time.sleep(2)
            lcd.clear()
    else :
        if mode == "Manual" :
            if  gate_state == "Closed" : 
                OpenGate()
                gate_state = "Open"
            elif  gate_state == "Open" : 
                CloseGate()
                gate_state = "Closed"

GPIO.add_event_detect(GPIO_Button, GPIO.RISING, callback=button_pressed_callback, bouncetime=100)
netThread = threading.Thread(target=networkCommandChecker)
netThread.start()
while 1:
    if mode == "Automatic" and networkLock == 0 : 
        if current_state == "Idle":
            if previous_state != current_state:
                lcd.clear()
                lcd.write_string("...")

            previous_state = "Idle"
            print("state is:  "+current_state)
            if CheckUlt1():
                current_state = "CheckCameraIn"
                continue
            
            elif CheckUlt2():
                current_state = "CheckCameraOut"
            

        elif current_state == "CheckCameraIn":
            lcd.clear()
            lcd.write_string("  Checking....")
            previous_state = "CheckCameraIn"
            print("state is:  "+current_state)
            inputScanner()
            if GPIO.input(GPIO_LDR):
                GPIO.output(GPIO_LED_IN,True)
            recognizer,plate = CameraRecognized()                           
            if recognizer:
                OpenGate()
                innerPlates.append(plate)
                lcd.clear()
                lcd.write_string("Plate: " + plate)
                time.sleep(2)
                lcd.clear()
                current_state = "OpenGateIn"
            else :
                lcd.clear()
                lcd.write_string("   not valid!")
                time.sleep(2)
                lcd.clear()
                current_state = "Idle"
            
            GPIO.output(GPIO_LED_IN,False)
            

        elif current_state == "OpenGateIn":
            previous_state = "OpenGateIn"
            print("state is:  "+current_state)

            if CheckUlt1() == 0 and CheckUlt2() == 1:
                current_state = "PassIn"


        elif current_state == "PassIn":
            previous_state = "PassIn"
            print("state is:  "+current_state)
            
            if CheckUlt1() == 0 and CheckUlt2() == 0:
                 current_state = "CloseGate"


        elif current_state == "CloseGate":
            previous_state = "CloseGate"
            print("state is:  "+current_state)
            CloseGate()
            current_state = "Idle"
            
                
        
        elif current_state == "CheckCameraOut":
            lcd.clear()
            lcd.write_string("  Checking....")
            previous_state = "CheckCameraOut"
            print("state is:  "+current_state)
            outputScanner()
            if GPIO.input(GPIO_LDR):
                GPIO.output(GPIO_LED_OUT,True)
            
            recognizer,plate = CameraRecognized()                           
            if recognizer:
                OpenGate()
                if plate in innerPlates:
                    innerPlates.remove(plate)
                lcd.clear()
                lcd.write_string("Plate: " + plate)
                time.sleep(2)
                lcd.clear()
                current_state = "OpenGateOut"
            else :
                lcd.clear()
                lcd.write_string("   not valid!")
                time.sleep(2)
                lcd.clear()
                current_state = "Idle"

            GPIO.output(GPIO_LED_OUT,False)

        elif current_state == "OpenGateOut":
            previous_state = "OpenGateOut"
            print("state is:  "+current_state)
            
            if CheckUlt1() == 1 and CheckUlt2() == 0:
                current_state = "PassOut"

        elif current_state == "PassOut":
            previous_state = "PassOut"
            print("state is:  "+current_state)

            if CheckUlt1() == 0 and CheckUlt2() == 0:
                current_state = "CloseGate"
           
                
        else:
            print("Error")
            current_state = "Idle"
 
        
