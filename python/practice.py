def insertionSort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j = j - 1

        arr[j + 1] = key

data = [-2, 45, 0, 11, -9]

print(data)
insertionSort(data)
print(data)


