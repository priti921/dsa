# O(n*n)
def selectionSort(arr):
    size = len(arr)

    for step in range(size):
        minIdx = step

        #find min val
        for i in range(step + 1, size):
            if arr[i] < arr[minIdx]:
                minIdx = i #swap the minIdx to i

        #set minVal to currect index
        (arr[step], arr[minIdx]) = (arr[minIdx], arr[step])

data = [-2, 45, 0, 11, -9]

print(data)
selectionSort(data)
print(data)


