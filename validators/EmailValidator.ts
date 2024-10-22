import FieldValidator from "../absctracts/FieldValidator";
import FieldValidationError from "../customErrors/FieldValidationError";

class EmailValidator extends FieldValidator {
  validate(value: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regular expression
    if (!emailRegex.test(value)) {
      throw new FieldValidationError(
        this.getErrorMessage(value),
        "EmailValidationError",
      );
    }
  }

  protected getErrorMessage(value: string): string {
    if (value.length === 0) {
      return `Email can not be empty`;
    }
    return `Input (${value}) is not a valid email`;
  }
}

export default EmailValidator;
