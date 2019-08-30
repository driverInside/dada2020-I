'''
abs.py
return the absolute value of a number

'''
def abs (number):
    return number * -1 if number < 0 else number

def main():
    print(abs(4)) # 4
    print(abs(0)) # 0
    print(abs(-9)) # 9


if __name__ == '__main__':
    main()
