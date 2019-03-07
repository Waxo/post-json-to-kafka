[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

# post-json-to-kafka

## Warning
This module is currently experimental, you can't specify you kafka endpoint yet.

## Install
```bash
yarn add post-json-to-kafka

# or

npm install --save post-json-to-kafka
```

## Example usage

```js
const {sendToKafka} = require('post-json-to-kafka');

const exampleFunction = async () => {
  const somethingToAddInsideEachMessage = 'what you want string, object, list, number';
  const listOfJSON = [
    {key: 'value', key2: 'value2'},
    {key: 'value', something: 'value'}
  ];
  
   
  await sendToKafka('topic', somethingToAddInsideEachMessage, listOfJSON)
};

exampleFunction().then(() => {console.log('Everything is sent')});
```
