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

```bash
# 📁 Clone the repository
git clone https://github.com/EwertonSolitto/dio-qrcode-generator.git

# 📂 Navigate to the project folder
cd dio-qrcode-generator

# 📦 Install dependencies
npm install

# Create the file
touch .env

``` 

```env
# Add the following environment variables to the .env file:
NUMBERS=true
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=12

```

```bash
# ▶️ Run the Application
npm start

```
