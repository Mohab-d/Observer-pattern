# Observer pattern implementation - Form validator use case

## A reusable and elegant form validation implemented with the observer pattern.
This project demonstrates the Observer design pattern using form validation as a use case. The form acts as the subject, while its fields serve as the observers. When the form is submitted, it notifies its fields to validate their input.

## Details
Subject: Responsible for notifying its observers when a state change occurs.

Observers: The fields, which are notified of changes in the subject's state and perform actions accordingly.

Form(Concrete subject): Upon posting, the form will notify its fields to validate their input

Field(Concrete observer): Once notified, the field will run a validation function on it's input

FieldValidator: A class representing a validation rule for a field. The Field calss takes an array of validators upon construction.

## How it works
- Form Creation: A Form instance is created, containing an array of Field objects.
- Field Creation: Each Field instance is associated with a set of FieldValidator objects.
- Form Submission: When the form is submitted, the Form instance calls its notify() method.
- Observer Notification: The notify() method iterates over the Field objects and calls their update() methods.
- Field Validation: Each Field object iterates over its FieldValidators and applies them to the field's value. If a validation fails, an error message is added to the field's error array.
- Error Handling: After all fields have been validated, the Form instance will have the invalid fields stored and can access the error arrays of its fields to display error messages or take other actions.

## Usage

- Create a Form instance.
```typescript
// create a form
const form = new Form();
```
- Create you fields and validators
```typescript
// create and customize the fields
const firstNameField = new Field("first name", "Mohammad", [
  new LengthValidator(5, 100),
]);

const passwordField = new Field("password", "Password", [
  new LengthValidator(8, 1000),
  new NoWhiteSpaceValidator(),
]);

const emailField = new Field("email", "mohab@gmail.com", [
  new EmailValidator(),
  new LengthValidator(3, 200),
]);
```
- Add Field instances to the form using the form.attach() method.
```typescript
// attach fields to the form
form.attach(firstNameField);
form.attach(emailField);
form.attach(passwordField);
```
- Post the form and handle the validation errors as needed.
```typescript
// post form
form.post();

// handle form state
if (form.isInvalid) {
  form.logFieldsErrors();
} else if (form.isValid) {
  console.log("Form posted!");
}
```

## Full Example

```typescript
// create a form
const form = new Form();

// create and customize the fields
const firstNameField = new Field("first name", "Mohammad", [
  new LengthValidator(5, 100),
]);

const passwordField = new Field("password", "Password", [
  new LengthValidator(8, 1000),
  new NoWhiteSpaceValidator(),
]);

const emailField = new Field("email", "mohab@gmail.com", [
  new EmailValidator(),
  new LengthValidator(3, 200),
]);

// attach fields to the form
form.attach(firstNameField);
form.attach(emailField);
form.attach(passwordField);

// post form
form.post();

// handle form state
if (form.isInvalid) {
  form.logFieldsErrors();
} else if (form.isValid) {
  console.log("Form posted!");
}
```
