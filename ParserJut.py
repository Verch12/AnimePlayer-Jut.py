from urllib.request import Request, urlopen
from bs4 import BeautifulSoup

def pars_site(agent, url):
    urlMas = [[], []]
    mass_temporary = []
    season = 1

    req = Request(
        url=url,
        headers={'User-Agent': agent}
    )
    webpage = urlopen(req)
    soup = BeautifulSoup(str(webpage.read()), 'html.parser')
    print(f'<Response [{webpage.getcode()}]> jut.su')

    allAnime = soup.find_all('div', class_='watch_l')

    for data in allAnime:
        for a in data.find_all('a', class_='short-btn'):
            mass_temporary.append(a['href'][len(url[14:]):-5].split('/'))

    for data in mass_temporary:
        if data[0][:4] == 'film':
            urlMas[-1].append(f'{url}/{data[0]}.html')
        elif data[0][:6] == 'season':
            if int(data[0][7:]) != season:
                season = int(data[0][7:])
                urlMas += [[]]
            urlMas[-2].append(f'{url}/{data[0]}/{data[1]}.html')
        elif data[0][:7] == 'episode':
            urlMas[-2].append(f'{url}/{data[0]}.html')

    return urlMas

#print(pars_site('User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36', 'https://jut.su/angela-beats/'))