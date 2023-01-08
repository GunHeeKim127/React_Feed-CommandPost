import csv

name = "김건희" 
action = state
date = nowTime
num = 0
################################################
#파일 생성과 동시에 파일에 data 입력
################################################
def WritePostLog():
    
    f = open('../../csvs/post_log.csv','a',newline='')
    wr = csv.writer(f)
    wr.writerow([num,name,action,date])
    num += 1
    f.close()