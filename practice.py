# n =int(input("enter a number="))
# print(n%5==0)
L = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

S = 0
while len(L) >= 2:
    S += L[0] + L[-1]
    L = L[1:]
    L = L[:-1]

print(L)

    
    