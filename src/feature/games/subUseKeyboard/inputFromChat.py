import sys
from time import sleep
import pyautogui

keyPressed = sys.argv[1]

sleep(3)
pyautogui.press(keyPressed)

print("keyPressed", keyPressed)


sys.stdout.flush()