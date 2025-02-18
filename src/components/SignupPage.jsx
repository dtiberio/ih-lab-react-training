import React, { useState } from 'react';
import './SignupPage.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const isValidEmail = email.includes('@') && email.includes('.');
  const isStrongPassword = password.length >= 6;

  const getGreeting = () => {
    switch (nationality) {
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  };

  return (
    <div className="signup-container">
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={isValidEmail ? 'valid-input' : 'invalid-input'}
          />
          {email && (
            <small className={isValidEmail ? 'text-success' : 'text-danger'}>
              {isValidEmail
                ? 'You typed a valid email'
                : 'Invalid email format'}
            </small>
          )}
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={isStrongPassword ? 'valid-input' : 'invalid-input'}
          />
          {password && (
            <small
              className={isStrongPassword ? 'text-success' : 'text-danger'}
            >
              {isStrongPassword
                ? 'Strong password'
                : 'Your password is too weak'}
            </small>
          )}
        </FormGroup>

        <FormGroup>
          <Label for="nationality">Nationality</Label>
          <Input
            type="select"
            id="nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </Input>
        </FormGroup>

        <Button color="primary">Sign up</Button>
      </Form>

      <div className="greeting-box">
        <p>{getGreeting()}</p>
        <p>Your email address is: {email}</p>
        {isValidEmail && (
          <p className="text-success">Your email address is correct</p>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
