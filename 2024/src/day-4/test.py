a = [[1,2,3], [4,5,6], [7,8,9]]
result = [(i,j) for i in range(len(a)) for j in range(len(a[0])) if a[i][j] % 2 == 0]
print(result)