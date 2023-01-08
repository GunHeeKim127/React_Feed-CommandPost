import csv

name = "김건희" 
subject = addValue
date = nowTime
action = state
################################################
#파일 생성과 동시에 파일에 data 입력
################################################
def writePost():
    if action == "create":    
        num = 0
        f = open('../../csvs/post.csv','a',newline=[num,name,subject,date])
        wr = csv.writer(f)
        num +=1
    elif action == "delete":
        with open("./test.txt", "r") as f:
            lines = f.readlines()
        with open("./test.txt", "w") as f:
            for line in lines:
                if line.strip("\n") != "ich liebe dich so wie du mich":     # <= 이 문자열만 골라서 삭제
                    f.write(line)
    f.close()