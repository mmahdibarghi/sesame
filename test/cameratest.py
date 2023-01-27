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


def main():
    time.sleep(2)
    takePhoto()
    plate = recognizePlate()
    print(plate)


    while 1:
        takePhoto()
        plate = recognizePlate()
        print(plate)
        validatePlate(plate)
        print("=======================================")
        time.sleep(1)


if __name__ == "__main__":
    main()
    
