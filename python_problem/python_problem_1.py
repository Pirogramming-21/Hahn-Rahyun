num = 0

def is_valid(player):
    while True:
        try:
            input_number = int(input(f"{player}, 부를 숫자의 개수를 입력하세요(1, 2, 3만 입력 가능): "))
            if input_number not in [1, 2, 3]:
                print("1, 2, 3 중 하나를 입력하세요")
            else:
                return input_number
        except ValueError:
            print("정수를 입력하세요")

def Game(player, number):
    global num
    for i in range(number):
        num += 1
        print(f"{player} : {num}")
        if num >= 31:
            return True
    return False

players = ["playerA", "playerB"]
turn = 0

while True:
    current_player = players[turn]
    input_number = get_input(current_player)
    if Game(current_player, input_number):
        break
    turn = 1 - turn
