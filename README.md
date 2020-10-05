# Caesar cipher CLI tool

CLI tool for encoding/decoding a text by Caesar cipher

## Initialization

Clone repository:
```bash
git clone https://github.com/marusyabon/caesar-cipher
```
Open bash in the root folder, then run
```bash
npm i
node src/index.js
```

## Usage

```node.js
CLI tool can accept 4 options:

-s, --shift: a shift
-i, --input: an input file
-o, --output: an output file
-a, --action: an action encode/decode

```
Action (encode/decode) and the shift are required.

If the input file is not provided, enter you data into console. To finish entering type ```ctrl + C```