# best: O(n), worst: O(n^2), Avg: O(n^2), space complexity: O(1)

def insertionSort(arr):
    for i in range(1, len(arr)): #skip the first index
        key = arr[i] #starting with 1 index
        j = i - 1 # index right before step

        #compare left to right
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j = j - 1

            arr[j + 1] = key


data = [9, 5, 1, 4, 3]

print(data)
insertionSort(data)
print(data)size
