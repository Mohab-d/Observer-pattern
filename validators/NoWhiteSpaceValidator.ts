import FieldValidator from "../absctracts/FieldValidator";
import FieldValidationError from "../customErrors/FieldValidationError";

class NoWhiteSpaceValidator extends FieldValidator {
  validate(value: string): void {
    const regex = /\s/;
    if (regex.test(value)) {
      throw new FieldValidationError(
        this.getErrorMessage(),
        "NoWhiteSpaceValidator",
      );
    }
  }

  protected getErrorMessage(): string {
    return `White spaces are not allowed`;
  }
}

export default NoWhiteSpaceValidator;
