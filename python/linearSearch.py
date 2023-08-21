def linearSearch(value, arr):
    for i in arr:
        if value == i:
            return True
    return False



print(linearSearch(9, [1,2,3,4,5,6,7,9]))



