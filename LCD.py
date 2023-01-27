#Libraries
import time
from RPLCD import CharLCD
import RPi.GPIO as GPIO

GPIO.setwarnings(False)  

lcd = CharLCD(numbering_mode=GPIO.BCM ,cols=16, rows=2, pin_rs=27, pin_e=22, pins_data=[5,6,19,26])
lcd.clear()
lcd.write_string(u"Hello world!")

#while True:
#    lcd.write_string(u"Hello world!")
#    time.sleep(1)
#    lcd.clear()
#    time.sleep(1)