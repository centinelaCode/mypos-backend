import bcrypt from 'bcrypt'

async function hashPassword(password) {
   const salt = await bcrypt.genSalt(10)
   return password = await bcrypt.hash(password, salt)
}

async function comprobarPassword(passwordFormulario, hashPassword) {
   return await bcrypt.compare(passwordFormulario, hashPassword)
}


export {
   hashPassword,
   comprobarPassword,
}
