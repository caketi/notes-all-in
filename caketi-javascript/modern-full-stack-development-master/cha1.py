import requests
import time
import os
 
def main():
    money = 0
    number = 0
    ts = str(int(time.time()))
    nodejs = os.popen('node 01 '+ts+'000')
    m = nodejs.read().replace('\n', '') + '丨' + ts
    nodejs.close()
    for page in range(1, 6):
        url = 'http://match.yuanrenxue.com/api/match/1?page='+str(page)+'&m='+m
        response = requests.get(url).json()
        for each in response['data']:
            money += each['value']
            number += 1
    print(money)
    print(number)
    print(money // number)
    # 总价：235000
    # 总数：50
    # 均值：4700
 
if __name__ == '__main__':
    main()