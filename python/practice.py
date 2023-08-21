def binarySearch(value, arr):
    start = 0
    end = len(arr) - 1

    while ( start <= end):
        mid = (start+end)//2

        if arr[mid] == value:
            return True
        elif arr[mid] < value:
            start = mid + 1
        else:
            end = mid - 1
    return False

print(binarySearch(5, [1,2,3,4,5]))
