import mongoose from 'mongoose'
import { URL_MONGO } from './config'

mongoose.connect(URL_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true    
})
    .then(db => console.log('DB connection succesfully'))
    .catch(err => {
        console.log(err)
    })