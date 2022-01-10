var LivingEntity = function (location) {
    this.x = location.x;
    this.y = location.y;
    this.z = location.z;
    this.moveWest = function () {
        this.x--;
        console.log('moving in main object', location, this.x)
    }
};
LivingEntity.prototype.moveEast = function () {
    this.x++
    console.log('moving in main prototype object', this.x)
}//do it funciton way, not arrow to have prototype intact

//New instance
var dog = new LivingEntity({x: 5, y: 0, z: 1});
var dog2 = new LivingEntity({x: 2, y: 2, z: 2});
dog.moveWest = function () {
    this.x--;
    console.log('moving is overridden', this.x)
}//override, which is not the idea
dog.moveWest()
dog2.moveWest()
//by doing this way, new function definitation gets associated with each object
//so we do it prototype way
dog.moveEast()
dog2.moveEast();

