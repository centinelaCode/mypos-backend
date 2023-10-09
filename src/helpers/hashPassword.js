import bcrypt from 'bcrypt'

async function hashPassword(password) {
   // let passwordHash
   const salt = await bcrypt.genSalt(10)
   return password = await bcrypt.hash(password, salt)
}


export {
   hashPassword,
}
