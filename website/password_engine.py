import random
from math import pi


def create_password(length:int) -> str:

    try:
        if 0 < length <= 100:
            characters = []
            for i in range(0, 123):
                if i in range(35, 39) or i in range(48, 58) or i in range(65, 91) or i in range(97, 123):
                    characters.append(chr(i))

            password = []
            for value in range(0, length):
                index = int((random.randint(0, 207) / pi))
                character = characters[index]
                password.append(character)
            return "".join(password)
        else:
            raise ValueError
    except ValueError:
        return "Password can be only in range 1 to 50 characters"
