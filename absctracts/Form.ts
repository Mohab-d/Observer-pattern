import Subject from "../absctracts/Subject";
import FieldValidationError from "../customErrors/FieldValidationError";
import Field from "./Field";

class Form extends Subject {
  isValid: boolean = true;
  isInvalid: boolean = false;
  invalidFields: Field[] = [];

  post() {
    // notifiy fields (observers) to statrt validating
    this.notify();

    // if any errors found, stop
    if (this.invalidFields.length > 0) {
      this.setState("invalid");
      return;
    }

    this.setState("valid");
  }

  // list all found errors
  logFieldsErrors() {
    this.invalidFields.forEach((field) => {
      console.log(field.name, "field errors:");
      field.fieldValidationErrors.forEach((err) => {
        console.log(`- ${err.message}`);
      });
      console.log();
    });
  }

  private resetState() {
    this.isValid = false;
    this.isInvalid = false;
  }

  private setState(to: "valid" | "invalid") {
    this.resetState();

    switch (to) {
      case "valid":
        this.isValid = true;
        break;
      case "invalid":
        this.isInvalid = true;
        break;
    }
  }

  public notify(): void {
    this._observers.forEach((observer) => {
      observer.update(this);
      if ((observer as Field).fieldValidationErrors.length > 0) {
        this.invalidFields.push(observer as Field);
      }
    });
  }
}

export default Form;
