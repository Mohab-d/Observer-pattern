import EmailValidator from "../validators/EmailValidator";
import LengthValidator from "../validators/LengthValidator";
import NoWhiteSpaceValidator from "../validators/NoWhiteSpaceValidator";
import Field from "../absctracts/Field";
import Form from "../absctracts/Form";

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
