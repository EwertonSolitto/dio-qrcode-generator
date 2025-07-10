import chalk from "chalk";
import prompt from "prompt";
import qr from "qrcode-terminal";

const message = chalk.blue.bold("\nType a link for your QR code\n");

const schema = {
  properties: {
    link: {
      message,
      required: true,
    },
  },
};

export default function QRCodeGenerator() {
  prompt.start();

  prompt.get(schema, (err, result) => {
    qr.generate(result.link, { small: true }, (qrcode) => {
      console.log(chalk.blue.bold("\nQR code generated!!\n"));
      console.log(qrcode);
    });
  });
}
