const {KafkaClient, Producer} = require('kafka-node');
const R = require('ramda');

const sendToKafka = R.curry(
  (topic, to, messages) =>
    new Promise(resolve => {
      const client = new KafkaClient({kafkaHost: process.env.KAFKA});
      const producer = new Producer(client);

      const payload = R.pipe(
        R.map(
          R.pipe(
            R.assoc('to', to),
            JSON.stringify
          )
        ),
        R.objOf('messages'),
        R.assoc('topic', topic),
        R.of
      )(messages);

      producer.on('ready', () => {
        producer.send(payload, () => {
          client.close(resolve);
        });
      });
    })
);

module.exports = {sendToKafka};
