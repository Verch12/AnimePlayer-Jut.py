from Elements.ParserAnime import Parser_anime
from Elements.Cmd import *
from Elements import DataBase
from Elements import PluginControl
import threading,importlib
import sys
import eel

def Argument(arg, main, minor):
   for ln in range(len(arg)):
      if arg[ln] == main or arg[ln] == minor:
         return arg[ln+1]
         break
   else:
      return None

arg = sys.argv[1:]

UnbanDPI = Argument(arg, "--UnbanDPI", "-ub")
if UnbanDPI == "unselected": pass
elif UnbanDPI != None: os.system(fr"start UnbanDPI\{UnbanDPI}")
else:
   Ub = Unban()
   if Ub != "unselected": os.system(fr"start UnbanDPI\{Ub}")

PluginID = Argument(arg, "--PluginID", "-pi")
if PluginID != None: Plugin = PluginID
else: Plugin = SelectionPlugin()

Logo('')
print('='*(shutil.get_terminal_size()[0]))


eel.init("Web")

@eel.expose
def Database(user_agent):
   eel.List(DataBase.List_anime(user_agent))

@eel.expose
def DelAnime(user_agent, url):
   DataBase.Delete_anime(user_agent, url)

@eel.expose
def DelAllAnime(user_agent):
   DataBase.DeleteAll_anime(user_agent)

@eel.expose
def myFunction(user_agent, url):
   if DataBase.Learn_anime(user_agent, url):
      eel.Count(DataBase.Read_anime(user_agent, url))
   else:
      DataBase.Write(user_agent, url, Parser_anime(user_agent, url))
      eel.Count(DataBase.Read_anime(user_agent, url))

def PluginLoop():
   print(Plugin)
   plagin = importlib.import_module(f"Plugins.{Plugin[:-3]}", ".")
   plagin.Plugin(PluginControl.PlayerControls(eel))

if Plugin != "default.py":
   threading.Thread(target=PluginLoop).start()

eel.start("playr.html", size=(750, 700))

