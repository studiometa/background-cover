# Background-cover

A small javascript implementation of the `background-size: cover` algorithm.

## Installation

```bash
yarn add studiometa-background-cover
```

## Usage

```js
import backgroundCover from 'background-cover'

const elementSizes = { width: 1500, height: 1200 }
const containerSizes = { width: 1280, height: 800 }

const newSizes = backgroundCover(elementSizes, containerSizes)
console.log(newSizes) // { width: 1280, height: 1024 }
```