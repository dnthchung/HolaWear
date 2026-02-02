import brcypt from 'bcrypt'

export class BcryptServices {
  private static readonly SALT_ROUNDS = 12

  static async hashPassword(password: string): Promise<string> {
    return await brcypt.hash(password, this.SALT_ROUNDS)
  }

  static async comparePassword(password: string, hashPassword: string): Promise<boolean> {
    return await brcypt.compare(password, hashPassword)
  }
}
