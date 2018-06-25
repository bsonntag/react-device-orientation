# react-device-orientation

> A react wrapper for device orientation events.

## Installation

Using npm:

```sh
$ npm install --save react-device-orientation
```

Using yarn:

```sh
$ yarn add react-device-orientation
```

## Example

```js
import DeviceOrientation from 'react-device-orientation';
import React from 'react';

const App = () => (
  <DeviceOrientation>
    {({ absolute, alpha, beta, gamma }) => (
      <div>
        {`Absolute: ${absolute}`}
        {`Alpha: ${alpha}`}
        {`Beta: ${beta}`}
        {`Gamma: ${gamma}`}
      </div>
    )}
  </DeviceOrientation>
);
```

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT
