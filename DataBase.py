import os
import shutil

def Write(agent, url, anime):
    path = f'save/{agent.replace("/", "!")}/'

    try:
        os.makedirs(path)
    except FileExistsError:
        print('Пользователь уже существует')

    with open(os.path.join(path, url[8:].replace("/", "!")+'.set'), 'w', encoding='utf-8') as f:
        f.write(str(anime)+'==')

def Read_anime(agent, url):
    path = f'save/{agent.replace("/", "!")}/'
    mass_anime = []

    with open(os.path.join(path, url[8:].replace("/", "!")+'.set'), 'r', encoding='utf-8') as f:
        mass = f.read()

    mass_temporary = []
    mass_len = 0
    for i in mass.split('['):
        if i[-4:-3] == ']':
            mass_len += 1
        if i != '':
            mass_temporary.append(i[:-3].replace("'", ""))

    for i in range(mass_len): mass_anime += [[]]
    for i in mass_temporary:
        mass_anime[-mass_len].append(i.replace(" ", "").replace("]", "").split(','))
        if i[-1:] == ']': mass_len -= 1
        if mass_anime[-1] == [['']]: mass_anime[-1] = []

    return mass_anime

def Learn_anime(agent, url):
    path = f'save/{agent.replace("/", "!")}/'

    try:
        with open(os.path.join(path, url[8:].replace("/", "!") + '.set'), 'r', encoding='utf-8') as f:
            return True
    except FileNotFoundError:
        return False


def List_anime(agent):
    path = f'save/{agent.replace("/", "!")}/'
    list_anime = []

    try:
        for i in os.listdir(path): list_anime.append('https://'+i[:-4].replace('!', '/'))
    except FileNotFoundError:
        print('Пользователь не существует')

    return list_anime

def Delete_anime(agent, url):
    path = f'save/{agent.replace("/", "!")}/'
    anime = os.path.join(path, url[8:].replace("/", "!")+'.set')

    os.remove(anime)

def DeleteAll_anime(agent):
    path = f'save/{agent.replace("/", "!")}/'

    shutil.rmtree(path)

#Delete_anime('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', 'https://jut.su/onepuunchman/')
#DeleteAll_anime('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36')

#print(List_anime('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'))
#print(Learn_anime('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', 'https://jut.su/boku-hero-academia/'))