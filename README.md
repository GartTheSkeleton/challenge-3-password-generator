# JavaScript Random Password Generator

## Functionality

This password generator uses Javascript functions to generate a random password based on criteria provided by the user.

## User criteria

To initiate password generation, the user must first click the "Generate Password" button.

The user will then be asked for the following criteria in this order.

- How many characters long should the password be. The password is contstrained to be no less than 8 characters long and no more than 128.
- Should the password contain lowercase letters?
- Should the password contain uppercase letters?
- Should the password contain numbers?
- Should the password contain special characters?

The function then verifies that the user has set up a valid criteria for their password. If the criteria is invalid the function informs the user why it is invalid and exits the function, prompting the user to try again.

Finally, the function uses math.random() to generate a random password character by character.
