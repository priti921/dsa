""" SQURE """
# def pattern(row):
#     for i in range(row):
#         for j in range(row):
#             print("*", end="")
#         print()
#             
# pattern(10)

"""pyramind"""
# def pattern(row ):
#     col=1
#     for i in range(row):
#         for j in range(col):
#             print("*", end="")
#             
#         print()
#         col = col + 2
#             
# pattern(10)

""" number pyramind"""
# def pat(row):
#     col = 1
#     for i in range(row):
#         for j in range(col):
#             print(int(col),end="")
#
#         print()
#         col = col + 1
#
# pat(5)

""" incremental number pyramind"""
# def pat(num):
#     col = 1
#     for i in range(num):
#         colnum = 1
#         for j in range(col):
#             print(int(colnum), end="")
#             colnum = colnum + 1
#         print()
#         col = col + 1
#    
# pat(10)

""" inverted pyramid """

# def pattern(num):
#     for i in range(num):
#         for j in range(num,0,-1): #reverse coundting in range(start, stop, count direction and amount)
#             print("*", end="")
#         print()
#         num = num - 1
#                     
# pattern(5)

""" inverted number pyramid"""

# def pattern(num):
#     for i in range(num, 0 , -1):
#         for j in range(1, i + 1):
#             print(j, end="")
#         print()
#
#
# pattern(5)


