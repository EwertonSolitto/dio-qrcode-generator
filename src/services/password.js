import chalk from "chalk";

import passwordCharacters from "../models/passwordCharacters.js";

export default function passwordGenerator() {
  const passwordPossibleCharacters = passwordCharacters();
  let newPassword = "";

  console.log(chalk.blue.bold("\nGenerating password......\n"));

  for (let i = 0; i < process.env.PASSWORD_LENGTH; i++) {
    const characterLength = Math.floor(
      Math.random() * (passwordPossibleCharacters.length + 1)
    );

    newPassword += passwordPossibleCharacters.charAt(characterLength);
  }

  console.log(chalk.yellow.bold("Your new password:\n"));
  console.log(chalk.red(newPassword + "\n"));
}
