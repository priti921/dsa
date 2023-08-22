#best O(n), worset O(n*n), avg O(n*n), space O(1)

def bubbleSort(arr):
    size = len(arr)

    # loop to for each bubble
    for i in range(size):

        #loop to compare arr elements
        for j in range(0, size - i - 1): # size - each step(gets sorted for each step) - 1 ( last index gets sorted on first iteration)
        
            #compare adjacent elements
            if arr[j] > arr[j+1]:
            #swap if left val is bigger than right
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

data = [ -2, 45, 0, 11,-9]

print(data)
bubbleSort(data)
print(data)
