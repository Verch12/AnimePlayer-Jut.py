import os

def test():
    general = []
    for file in os.listdir():
        if file[:7] == "general":
            general.append(file)
    print(general)

test()
#os.system("start general(ALT3).bat")