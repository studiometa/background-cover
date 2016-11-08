# Background-cover

A small javascript implementation of the `background-size: cover` algorithm.

## Usage

```js
import backgroundCover from 'background-cover'

const elementSizes = { width: 1500, height: 1500 }
const containerSizes = { width: 1280, height: 800 }

const newSizes = backgroundCover(elementSizes, containerSizes)
```