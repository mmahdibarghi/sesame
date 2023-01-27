import urllib.request
import json
import time
import RPi.GPIO as GPIO


GPIO.setmode(GPIO.BOARD)
GPIO.setup(7,GPIO.OUT)

url = "http://dweet.io/get/latest/dweet/for/shantanu"

while True:
    response = urllib.request.urlopen(url)
    data = json.loads(response.read().decode('utf-8'))
    status = data['with'][0]['content']['led']
    print('LED Status = ', status)

    if status == 'on':
        GPIO.output(7,True)
    else:
        GPIO.output(7,False)
    
    time.sleep(2)


GPIO.cleanup()
