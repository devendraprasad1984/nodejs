import Sequelize from "sequelize"
import Faker from 'faker'

const STRING = Sequelize.STRING
const connection = new Sequelize('postgres', 'dpadmin', 'root', {
    host: 'localhost',
    dialect: 'postgres'
})

const dogs = connection.define('dog', {
    name: {type: STRING, allowNull: false},
    age: {type: STRING, allowNull: false},
    bread: {type: STRING, allowNull: false}
})

const person = connection.define('person', {
    firstName: {type: STRING, allowNull: false},
    lastName: {type: STRING, allowNull: false},
    email: {type: STRING, allowNull: false}
})
const post = connection.define('post', {
    title: {type: STRING, allowNull: false},
    content: {type: STRING, allowNull: false}
})
person.hasMany(post)
post.belongsTo(person)


connection.sync({force: true}).then(() => {
    for (let i = 0; i < 10; i++) {
        person.create({
            firstName: Faker.name.firstName(),
            lastName: Faker.name.lastName(),
            email: Faker.internet.email()
        }).then(per=>{
            return per.createPost({
                title:`sample posts by ${per.firstName}`,
                content: `sample post content`
            })
        })
    }
})

// module.exports=connection
export default connection
