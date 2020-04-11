
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let cntr=0
    for (let x in objects) {
        let obj = objects[x]
        if (obj.x === obj.y) {
            cntr+=1
        }
    }
    return cntr
}
objects=[{x:1,y:1},{x:3,y:3},{x:5,y:2},{x:1,y:2},{x:3,y:5},{x:4,y:4}]
console.log(getCount(objects))
