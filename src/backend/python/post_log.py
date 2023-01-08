import csv


################################################
#파일 생성과 동시에 파일에 data 읽어오기
################################################
def readPostLog():
    f = open('post_log.csv','r')
    rd = csv.reader(f)
    for line in rd:
        num=line[0]
        print(num)
        print(line)
    f.close()