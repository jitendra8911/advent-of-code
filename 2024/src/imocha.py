def func(val, lst=[]):
    lst.append(val)
    return lst

print(func(1))  # Call 1
print(func(2))  # Call 2
print(func(3, []))  # Call 3
print(func(4))