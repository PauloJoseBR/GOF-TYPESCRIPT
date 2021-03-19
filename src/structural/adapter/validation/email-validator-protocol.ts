export interface EmailValidatiorProtocol {
  isEmail(value: string): boolean;
}

export interface EmailValidationFnProtocol {
  (value: string): boolean;
}
