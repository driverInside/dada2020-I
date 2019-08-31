'''
quadratic.py

resolve quadratic equations with the form
ax^2 + bx + c = 0

'''
import math

def quadratic (a, b, c):
    div = 2 * float(a)
    dis = b * b - (4 * a * c)

    if dis < 0:
        x1 = str(-b/div) + " + " + str(math.sqrt(dis * -1) / div) + "i"
        x2 = str(-b/div) + " - " + str(math.sqrt(dis * -1) / div) + "i"
    else:
        x1 = (- b + math.sqrt(dis)) / div
        x2 = (- b - math.sqrt(dis)) / div

    return [x1, x2]

def main():
    a = 2
    b = 3
    c = 6
    x1 = 0
    x2 = 0
    print(quadratic(a, b, c))

if __name__ == '__main__':
    main()