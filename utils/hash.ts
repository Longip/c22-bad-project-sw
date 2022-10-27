import * as bcrypt from 'bcryptjs'

const SALT_ROUNDS = 10

export async function hashPassword(plainPassword: string) {
	const hash = await bcrypt.hash(plainPassword, SALT_ROUNDS)
	return hash
}

export async function checkPassword(plainPassword: string, hashPassword: string) {
	const isValid = await bcrypt.compare(plainPassword, hashPassword)
	return isValid
}

