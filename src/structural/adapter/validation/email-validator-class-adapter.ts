import isEmail from 'validator/lib/isEmail';
import { EmailValidatiorProtocol } from './email-validator-protocol';

export class EmailValidatorClassAdapter implements EmailValidatiorProtocol {
  isEmail(value: string): boolean {
    return isEmail(value);
  }
}
