# VueJS Telegram Clone App

SO Question reference [here](https://stackoverflow.com/questions/46898262/how-to-receive-my-own-telegram-messages-in-node-js-without-bot).

### MTProto Libary Dependency Fix

This project requires the [telegram-mtproto](https://github.com/zerobias/telegram-mtproto) library. However, this will not work without a couple of changes to a couple of package versions in that project. So in our app we do NOT install this via the published npm package (telegram-mtproto@beta). Instead we need to clone the repo and update the package.json file to bump up `worker-loader` to `^1.1.1` and `webpack` to `^4.0.0`.

So in telegrap-mtproto project make sure that the package.json has the following:

So in `telegram-mtproto` project `package.json` file make sure that in the `dependencies` section, set `worker-loader` as follows:

```
"dependencies": {
  ... // leave other packages unchanged
  "worker-loader": "^1.1.1"
}
```

In the `devDependencies` section, set `webpack` as follows:

```
"devDependencies": {
  ... // leave other packages unchanged
  "webpack": "^4.0.0"
}
```

Now in the `telegram-mtproto` directory run:

```
npm install
npm run build
```

Return to this application and continue to develop, build and run the project as normal.

### Testing the application using the Telegram Data Center test servers

This application connects to the test Telegram Data Center (dc) so use the phone number `+9996620000` and code `22222` when trying this out!

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
