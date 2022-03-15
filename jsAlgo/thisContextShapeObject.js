const shape = {
    type: 'circle',
    getShape() {
        console.log('getting shape', this.type)
    },
    getShape1: function () {
        console.log('getting shape from function', this.type)
    },
    perimeter: () => {
        console.log('this is perimeter call', this.type)
    }
}
//arrows doesnt have this so will always be undefined
shape.getShape() //it will be circle as directly called by shape object
shape.getShape1() //circle
// shape.perimeter() //undefined/error as this is not there for arrow functions

let shp = shape //object reference assignment
shp.getShape() //circle
shp.getShape1() //circle

