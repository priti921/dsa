def bs(val, arr):
    start = 0
    end = len(arr) - 1

    while start <= end:
        mid = (start + end) // 2

        if arr[mid] == val:
            return (True, mid)
        elif arr[mid] < val:
            start = mid + 1
        else:
            end = mid - 1

    return False

# data = [-2, 45, 0, 11, -9]
data = [-2,-1,0,1,2]

# print(data)
print(bs(1,data))
# print(data)


