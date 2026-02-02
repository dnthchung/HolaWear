import crypto from 'crypto'

export class OTPServices {
  static generateOTP(): string {
    return crypto.randomInt(100000, 999999).toString() // generate 6 digits
  }

  static async hashOTP(otp: string): Promise<string> {
    return crypto.createHash('sha256').update(otp).digest('hex')
  }

  static async verifyOTP(otp: string, hashOtp: string): Promise<boolean> {
    const hashNewOtp = await this.hashOTP(otp)
    return hashNewOtp === hashOtp
  }

  static isOTPExpired(expOTP: Date): boolean {
    return new Date() > expOTP
  }
}
