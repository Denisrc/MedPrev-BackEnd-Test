module.exports = {
  development: {
    port: process.env.PORT || 3333,
    DBHost: 'mongodb+srv://admin:XH1oieESqW8qUL3a@medprev.zmq39.mongodb.net/development?retryWrites=true&w=majority',
  },
  test: {
    port: process.env.PORT || 3333,
    DBHost: 'mongodb+srv://admin:XH1oieESqW8qUL3a@medprev.zmq39.mongodb.net/test?retryWrites=true&w=majority',
  },
};
