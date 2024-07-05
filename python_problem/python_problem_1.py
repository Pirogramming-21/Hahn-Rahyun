# 1단계
num = 0

# 2단계와 3단계
while True:
    try:
        input_number = int(input("부를 숫자의 개수를 입력하세요(1, 2, 3만 입력 가능): "))
        if input_number not in [1, 2, 3]:
            print("1, 2, 3 중 하나를 입력하세요")
        else:
            break
    except ValueError:
        print("정수를 입력하세요")
