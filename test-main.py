import os, importlib

listDir = os.listdir("Test")
for i in range(len(listDir)):
    if listDir[i][-3:] == ".py":
        print("\033[31m{}".format(f"{i}: {listDir[i]}"))

test = listDir[int(input("&: "))]
importlib.import_module(f"Test.{test[:-3]}", ".")