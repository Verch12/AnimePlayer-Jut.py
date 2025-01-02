import shutil
import serial

class Plugin:
    def __init__(self, control):

        self.control = control

        self.codes = {
            8: "SHOTDOWN",
            208: "MUTE",
            32: "1",
            192: "2",
            232: "3",
            248: "4",
            16: "5",
            240: "6",
            34: "7",
            2: "8",
            10: "9",
            170: "0",
            130: "PC/BT",
            162: "FM",
            136: "USB/SD",
            64: "EQ",
            80: "TUNING-",
            112: "TUNING+",
            122: "VOL-",
            96: "VOL+",
            128: "SKIP-",
            144: "SKIP+",
            0: "STOPLAY",
        }

        self.ser = serial.Serial('COM7', 9600)

        while 1:
            read = int(self.ser.readline().decode('latin-1')[:-2], 16)

            if self.codes[read] == "SHOTDOWN":
                control.Exit()
                exit()
            elif self.codes[read] == "MUTE":
                self.control.Fullscreen()
            elif self.codes[read] == "EQ":
                self.control.SkipOpening()
            elif self.codes[read] == "SKIP-":
                self.control.Rewind()
            elif self.codes[read] == "SKIP+":
                self.control.Forward()
            elif self.codes[read] == "TUNING+":
                self.control.SkipEpisode()
            elif self.codes[read] == "TUNING-":
                self.control.UndEpisode()
            elif self.codes[read] == "STOPLAY":
                self.control.PlayPause()
            elif self.codes[read] == "FM":
                try:
                    self.control.SetOpening(self.dialingNumber())
                except:
                    self.control.ResetCMD("{FATAL ERROR!!!}")
                    print('=' * (shutil.get_terminal_size()[0]))
            elif self.codes[read] == "PC/BT":
                try:
                    self.control.SeasonChange(self.dialingNumber()-1)
                except:
                    self.control.ResetCMD("{FATAL ERROR!!!}")
                    print('=' * (shutil.get_terminal_size()[0]))
            elif self.codes[read] == "USB/SD":
                try:
                    self.control.EpisodeChange(self.dialingNumber()-1)
                except:
                    self.control.ResetCMD("{FATAL ERROR!!!}")
                    print('=' * (shutil.get_terminal_size()[0]))
            elif self.codes[read] == "0":
                try:
                    self.control.QualityChange(self.dialingNumber()-1)
                except:
                    self.control.ResetCMD("{FATAL ERROR!!!}")
                    print('=' * (shutil.get_terminal_size()[0]))

    def dialingNumber(self):
        read = 1
        nomber = ""
        self.control.ResetCMD("")
        print('=' * (shutil.get_terminal_size()[0]))
        print("Введите число:")
        while read != 0:
            read = int(self.ser.readline().decode('latin-1')[:-2], 16)
            if self.codes[read].isdigit() == True:
                nomber += self.codes[read]
                self.control.ResetCMD("")
                print('=' * (shutil.get_terminal_size()[0]))
                print("Введите число:")
                print(nomber)
        else:
            return int(nomber)