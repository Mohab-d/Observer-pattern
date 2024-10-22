abstract class FieldValidator {
  validate(value: any): void {
    throw new Error("Not implemented");
  }

  protected getErrorMessage(value: any): string {
    throw new Error("Not implemented");
  }
}

export default FieldValidator;
