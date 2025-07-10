export default function passwordCharacters() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";

  if (process.env.NUMBERS) {
    password += "0123456789";
  }

  if (process.env.UPPERCASE_LETTERS) {
    password += alphabet;
  }

  if (process.env.LOWERCASE_LETTERS) {
    password += alphabet.toLowerCase();
  }

  if (process.env.SPECIAL_CHARACTERS) {
    password += "!@#$%&*(){}[]^";
  }

  return password;
}
