import FieldValidator from "../absctracts/FieldValidator";
import Subject from "../absctracts/Subject";
import FieldValidationError from "../customErrors/FieldValidationError";
import Form from "./Form";
import Observer from "./Observer";

class Field implements Observer {
  name: string; // field name
  value: any; // field value
  fieldValidators: FieldValidator[] = []; // given validators
  fieldValidationErrors: FieldValidationError[] = []; // errors of this field

  constructor(name: string, value: any, fieldValidators: FieldValidator[]) {
    this.name = name;
    this.value = value;
    this.fieldValidators = fieldValidators;
  }

  validateField() {
    try {
      // run all given validators
      this.fieldValidators.forEach((validator) => {
        validator.validate(this.value);
      });
    } catch (err) {
      // store catched errors
      this.fieldValidationErrors.push(err);
    }
  }

  // the subject (form) is being posted
  update(form: Form) {
    this.validateField();
  }
}

export default Field;
