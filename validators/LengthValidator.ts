import FieldValidator from "../absctracts/FieldValidator";
import FieldValidationError from "../customErrors/FieldValidationError";

class LengthValidator extends FieldValidator {
  min: number;
  max: number;

  constructor(min: number, max: number) {
    super();
    this.min = min;
    this.max = max;
  }

  validate(value: string) {
    if (value.length < this.min || value.length > this.max) {
      throw new FieldValidationError(
        this.getErrorMessage(value),
        "LengthError",
      );
    }
  }

  protected getErrorMessage(value: string): string {
    // Fixed length case
    if (this.min === this.max) {
      return `Field length must be ${this.min} characters.`;
    }

    // Length must be in specified range case
    return `Field length must be between ${this.min} and ${this.max} characters`;
  }
}

export default LengthValidator;
