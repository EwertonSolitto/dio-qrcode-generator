import prompt from "prompt";
import chalk from "chalk";

import QRCodeGenerator from "./services/qrcode.js";
import passwordGenerator from "./services/password.js";

const startText =
  chalk.blue.bold("\nSELECT ONE OF THESE OPTIONS\n\n") +
  chalk.yellow.bold("(0) - Generate QR code \n(1) - Generate password\n");

const schema = {
  properties: {
    num: {
      pattern: /^[0-1]/,
      message: startText,
      required: true,
    },
  },
};

console.log(startText);

prompt.start();

prompt.get(schema, (err, result) => {
  if (result.num === "0") {
    QRCodeGenerator();
  } else {
    passwordGenerator();
  }
});
