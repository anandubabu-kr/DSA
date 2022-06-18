arr = [24, 12, 3, 1, 1]

i = 0
len = len(arr)

swaps = 0
steps = 0
while i < len:
    steps += 1
    j = 0
    while j < len-1:
        if arr[j] > arr[j+1]:
            swaps += 1
            arr[j], arr[j+1] = arr[j+1], arr[j]  # SWAPPING
        j += 1
    i += 1

print('Sorted array : ', arr, '\nn', len,
      '\nswaps : ', swaps, '\nsteps : ', steps)

"""
    Basically it takes n steps thats why we use i 
    In each step the largest will be placed in its right position
        j will compare each element from first till it finds the 
"""
