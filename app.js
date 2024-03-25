const mongoose = require('mongoose');
const url_db = 'mongodb://localhost:27017/utma'
mongoose.connect(url_db)
.then(() => {
    console.log ('jalo')
})
.catch((err) => {
    console.log('no jalo')
})


const esquema_alumnos = new mongoose.Schema(
    {
        name:{
            type:String
        },
        apepat:{
            type:String
        },
        apemat:{
            type:String
        },
        telnumber:{
            type:Number
        },
        fechanac:{
            type:Date
        }
    }
)

const alumnos = new mongoose.model('tabla de registo de alumnos', esquema_alumnos)

alumnos.create(
    {
        name:'Pepe',
        apepat:'Federiko',
        apemat:'Rastrillo',
        telnumber:12345678,
        fechanac: new Date('2004, 2, 12')
    }
)