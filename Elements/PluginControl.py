from Elements import Cmd
import os

class PlayerControls():
    def __init__(self, eel):
        self.eel = eel

    def PlayPause(self):
        self.eel.fplayPause()

    def SetOpening(self, value):
        self.eel.fsetOpening(value)

    def SkipOpening(self):
        self.eel.fskipOpening()

    def Rewind(self):
        self.eel.frewind()

    def Forward(self):
        self.eel.fforward()

    def Fullscreen(self):
        self.eel.ffullscreen()

    def SeasonChange(self, setSeason):
        self.eel.fseasonChange(setSeason)

    def EpisodeChange(self, setEpisode):
        self.eel.fepisodeChange(setEpisode)

    def QualityChange(self, setQuality):
        self.eel.fqualityChange(setQuality)

    def SkipEpisode(self):
        self.eel.fskipEpisode()

    def UndEpisode(self):
        self.eel.fundEpisode()

    def Exit(self):
        os.system(R'taskkill /F /IM chrome.exe')

    def ResetCMD(self, Error):
        Cmd.Logo(Error)