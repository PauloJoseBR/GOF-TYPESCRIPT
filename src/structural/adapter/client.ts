import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidationFnProtocol,
  EmailValidatiorProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatiorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email é válido');
  } else {
    console.log('Email é inválido');
  }
}

function validaEmailFn(
  emailValidator: EmailValidationFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email é válido');
  } else {
    console.log('Email é inválido');
  }
}

validaEmailClass(new EmailValidatorClassAdapter(), 'joao@hotmail.com');
validaEmailFn(emailValidatorFnAdapter, 'maria@hotmail.com');
