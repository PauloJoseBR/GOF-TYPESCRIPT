import isEmail from 'validator/lib/isEmail';
import { EmailValidationFnProtocol } from './email-validator-protocol';

export const emailValidatorFnAdapter: EmailValidationFnProtocol = (
  value: string,
): boolean => {
  return isEmail(value);
};
