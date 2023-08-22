def insertionSort(arr):
    for step in range(1, len(arr)): #skip the first index
        key = arr[step] #starting with 1 index
        j = step - 1 # index right before step

        #compare left to right
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j = j - 1

            arr[j + 1] = key


data = [9, 5, 1, 4, 3]

print(data)
insertionSort(data)
print(data)size
