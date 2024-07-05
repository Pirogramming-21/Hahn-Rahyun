num = 0

while True:
    try:
        input_number = int(input("부를 숫자의 개수를 입력하세요(1, 2, 3만 입력 가능): "))
        if input_number not in [1, 2, 3]:
            print("1, 2, 3 중 하나를 입력하세요")
        else:
            break
    except ValueError:
        print("정수를 입력하세요")

# 4단계
for i in range(input_number):
    num += 1
    print(f"playerA : {num}")
