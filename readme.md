# 🔐 DIO QRCode and Password Generator

<img src="https://github.com/EwertonSolitto/dio-qrcode-generator/blob/main/assets/preview.png" alt="App preview" />

## 📝 About

A simple and effective QR code and password generator built with **Node.js**.  
Useful for creating secure passwords and sharing information via QR codes directly in the terminal.

## 🔥 Features

✅ Generate strong random passwords  
✅ Generate terminal-based QR codes  
✅ Fully customizable via `.env` file

## ⚙️ Technologies

- 💻 JavaScript  
- 🧠 Node.js

## 🔗 Dependencies

- 🎨 [`chalk`](https://www.npmjs.com/package/chalk) – for styling the terminal output  
- 📱 [`qrcode-terminal`](https://www.npmjs.com/package/qrcode-terminal) – for rendering QR codes in the terminal  
- 💬 [`prompt`](https://www.npmjs.com/package/prompt) – for user interaction in the CLI

## 🚀 Installation & Usage

> Make sure you have **Node.js** installed.

1. 📁 Clone the repository

```bash
git clone https://github.com/EwertonSolitto/dio-qrcode-generator.git
```

2. 📂 Navigate to the project folder

```bash
cd dio-qrcode-generator
```

3. 📦 Install dependencies

```bash
npm install
```

4. Create the file

```bash
touch .env
``` 

5. Add the following environment variables to the .env file:

```env
NUMBERS=true
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=12
```

6. ▶️ Run the Application

```bash
npm start
```
