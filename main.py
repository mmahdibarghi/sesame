from ultrasonics import *
from gate import *
from camera import *

#from camera import *

#s0 = Idle
#s1 = CheckCamera
#s2 = OpenGateIn
#s3 = PassIn
#s4 = CloseGate
#s5 = OpenGateOut
#s6 = PassOut


state = "Idle"

while 1:
    if state == "Idle":
        print("Idle")
        if CheckUlt1():
            state = "CheckCamera"
            continue
        if CheckUlt2():
            OpenGate()
            state = "OpenGateOut"
            continue
    elif state == "CheckCamera":
        print("CheckCamera")
        if CameraRecognized():
            OpenGate()
            state = "OpenGateIn"
        else :
            state = "Idle"
    elif state == "OpenGateIn":
        print("OpenGateIn")
        if CheckUlt2():
            state = "PassIn"
    elif state == "PassIn":
        print("PassIn")
        if CheckUlt1() == 0 and CheckUlt2() == 0:
            state = "CloseGate"
    elif state == "CloseGate":
        print("CloseGate")
        CloseGate()
        state = "Idle"
    elif state == "OpenGateOut":
        print("OpenGateOut")
        if CheckUlt1():
            state = "PassOut"
    elif state == "PassOut":
        print("PassOut")
        if CheckUlt1() == 0 and CheckUlt2() == 0:
            state = "CloseGate"
    else:
        print("Error")
        state = "Idle"



