import bcrypt from 'bcrypt'

export async function hashPassword(password) {
   // let passwordHash
   const salt = await bcrypt.genSalt(10)
   return password = await bcrypt.hash(password, salt)
}


