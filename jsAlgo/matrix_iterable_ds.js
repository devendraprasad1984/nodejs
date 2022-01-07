class Matrix {
    constructor(wid, hei, ele) {
        this.wid = wid
        this.hei = hei
        this.content = []
        for (let y = 0; y < hei; y++) {
            for (let x = 0; x < wid; x++) {
                this.content[y * wid + x] = ele(x, y)
            }
        }
    }

    get(x, y) {
        return this.content[y * this.wid + x]
    }

    set(x, y, value) {
        this.content[y * this.wid + x] = value
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0
        this.y = 0
        this.matrix = matrix
    }

    next() {
        if (this.y === this.matrix.hei) return {done: true}
        let value = {x: this.x, y: this.y, value: this.matrix.get(this.x, this.y)}
        this.x++
        if (this.x == this.matrix.wid) {
            this.x = 0
            this.y++
        }
        return {value, done: false}
    }
}

//setup matrix iterator
Matrix.prototype[Symbol.iterator] = function () {
    return new MatrixIterator(this)
}

let matrix = new Matrix(2, 2, (x, y) => `value (${x},${y})`)
console.log(matrix)
for (let {x, y, value} of matrix) {
    console.log(x, y, value)
}


//inheritence
class SymmetricMatrix extends Matrix {
    constructor(size, element) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x)
            else return element(x, y)
        });
    }

    //overriding from parent
    set(x, y, value) {
        super.set(x, y, value)
        if (x != y) {
            super.set(y, x, value)
        }
    }
}

let newMatrix = new SymmetricMatrix(5, (x, y) => `${x} - ${y}`)
console.log(newMatrix.get(1, 2))