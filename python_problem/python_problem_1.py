import random

num = 0

def get_input(player):
    if player == "computer":
        return random.randint(1, 3)
    while True:
        try:
            input_number = int(input(f"{player}, 부를 숫자의 개수를 입력하세요(1, 2, 3만 입력 가능): "))
            if input_number not in [1, 2, 3]:
                print("1, 2, 3 중 하나를 입력하세요")
            else:
                return input_number
        except ValueError:
            print("정수를 입력하세요")

def brGame(player):
    global num
    number = get_input(player)
    for i in range(number):
        num += 1
        print(f"{player} : {num}")
        if num >= 31:
            return True
    return False

players = ["computer", "player"]
turn = 0

while True:
    current_player = players[turn]
    if brGame(current_player):
        winner = players[1 - turn]
        print(f"{winner} win!")
        break
    turn = 1 - turn
