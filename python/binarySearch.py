def binarySearch(value, arr):
    start = 0
    end = len(arr) - 1

    while(start <= end):
        middle = (start+end)//2
        if value == arr[middle]:
            return True
        elif arr[middle] > value:
            end = middle - 1
        else:
            start = middle + 1
    return False


print(binarySearch(10,[1,2,3,4,5]))
