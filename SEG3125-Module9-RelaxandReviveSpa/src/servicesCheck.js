// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
import Contact from './Contact';

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

const nameValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === '') {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return 'Invalid characters';
  }
  if (fieldValue.trim().length < 3) {
    return `${fieldName} needs to be at least three characters`;
  }
  return null;
};

const emailValidation = email => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email,
    )
  ) {
    return null;
  }
  if (email.trim() === '') {
    return 'Email is required';
  }
  return 'Please enter a valid email';
};

const ageValidation = age => {
  if (!age) {
    return 'Age is required';
  }
  if (age < 18) {
    return 'Age must be at least 18';
  }
  if (age > 99) {
    return 'Age must be under 99';
  }
  return null;
};

const validate = {
  firstName: name => nameValidation('First Name', name),
  lastName: name => nameValidation('Last Name', name),
  email: emailValidation,
  age: ageValidation,
};

const initialValues = {
  age: 10,
  email: 'no@email',
  firstName: 'Mary',
  lastName: 'Jane',
};

function App() {
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '960px',
        padding: '10px',
      }}
    >
      <Router>
        <div>
          <h1>Forms</h1>
          <ul>
            <li>
              <Link to="/contact">Form with manual validation</Link>
            </li>
            
          </ul>
        </div>
        <Route
          path="/contact"
          render={() => (
            <Contact validate={validate} initialValues={initialValues} />
          )}
        />
        <Route
          path="/form-formik"
          render={() => (
            <Contact validate={validate} initialValues={initialValues} />
          )}
        />
      </Router>
    </div>
  );
}

export default App;
