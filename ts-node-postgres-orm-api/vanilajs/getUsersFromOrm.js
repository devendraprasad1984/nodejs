const getUsersFromORM = (req, res, con)=> {
    let result = []
    let userRepo=con.getRepository("user")
    console.log(userRepo)
}
// module.exports = getUsersFromORM
export default getUsersFromORM
