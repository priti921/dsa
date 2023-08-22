def bs(val,arr):
    start = 0
    end = len(arr) - 1

    while start <= end:
        mid = (start+end)//2

        if arr[mid] == val:
            return True
        elif arr[mid] < val:
            start = mid + 1
        else:
            end = mid - 1

    return False
            
print(bs(-4, [-2,-1,0,1,2,3,4,5]))
