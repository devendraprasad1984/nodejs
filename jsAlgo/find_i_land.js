/*
 Find the number of islands.
 Given a boolean 2D matrix, find the number of islands. A group of connected 1s forms an island. For example, the below matrix contains 6 islands
 up down , left right

 Example:
 Input : mat[][] = {{1, 1, 0, 0, 0},
 {0, 1, 0, 0, 1},
 {1, 0, 0, 1, 1},
 {0, 0, 0, 0, 0},
 {1, 0, 1, 0, 1}}
 Output : 6


 1->matrix 2D array will be object, maintain a counter
 2-take recurssion approach, by passing the matrix as well as row, col index
 3-entry will be 0 cell, exit condition will be last cell in the matrix
 4- at every cell, if it 1, keep a flag on and check the left, right, down, up cells for adjecent 1 and while checking make sure the cell is not the boundary cells based on row col index
 4- at every cell, if it 1, keep a flag on and check the left, right, down, up cells for adjecent 1 and while checking make sure the cell is not the boundary cells based on row col index
 5-flag is ON and its goepeat and flag will be off only when any adjecent cell is 0
 6-maintain a temp object for visited cells that have 1 and flag is ON
 7-when adjecent 0 condition is found, i will make sure the flag is OFF and counter is ON and i will change the visited cell to -1
 8 this -1 or visited cell will be an indication


 */


let mat=[
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1]
]

let counter=0
