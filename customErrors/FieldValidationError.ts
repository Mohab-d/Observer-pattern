class FieldValidationError extends Error {
  constructor(message: string, name: string) {
    super(message);
    this.name = name;
  }
}

export default FieldValidationError;
