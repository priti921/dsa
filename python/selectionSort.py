# O(n*n)
def selectionSort(arr):
    size = len(arr)

    for i in range(size):
        minIdx = i

        #find min val
        for j in range(i + 1, size):
            if arr[j] < arr[minIdx]:
                minIdx = j #swap the minIdx to i

        #set minVal to currect index
        (arr[i], arr[minIdx]) = (arr[minIdx], arr[i])

data = [-2, 45, 0, 11, -9]

print(data)
selectionSort(data)
print(data)


