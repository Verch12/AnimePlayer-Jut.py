from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
from Elements.ParserJut import pars_site

def parser_anime(agent, url):
    url_anime = pars_site(agent, url)
    long = len(url_anime)
    fils = []
    if url_anime[-1] == []: long -= 1

    for i in range(long):
        fils += [[]]
        for j in url_anime[i]:
            req = Request(
                url=j,
                headers={'User-Agent': agent}
            )
            webpage = urlopen(req)
            soup = BeautifulSoup(str(webpage.read()), 'html.parser')
            print(f'<Response [{webpage.getcode()}]> {j}')

            fil = []

            video = soup.find_all('video', class_='video-js vjs-default-skin vjs-16-9')

            for fnish in video:
                for sou in fnish.find_all('source'):
                    fil.append(sou['src'])
                fils[-1].append(fil)
    if url_anime[-1] == []: fils += [[]]
    return fils