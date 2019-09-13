'''
abs.py
return the absolute value of a number

'''
def abs (num):
    return num * -1 if num < 0 else num

def main():
    print(abs(4)) # 4
    print(abs(0)) # 0
    print(abs(-9)) # 9


if __name__ == '__main__':
    main()
