class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None


class SLinkedList:
    def __init__(self):
        self.head = None


    #traverses through the list
    def traverse(self):
        printval = self.head
        while printval is not None:
            print(printval.data)
            printval = printval.next


list1 =  SLinkedList()
list1.head = Node("mon")
list1.head.next = Node("tues")

list1.traverse()

