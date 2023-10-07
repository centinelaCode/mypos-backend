import express from 'express';
const PORT = process.env.PORT || 4000;

const app = express()
console.log('desde index.js ')


app.listen(PORT, () => {
   console.log(`Server run on Port ${PORT}`)
})
