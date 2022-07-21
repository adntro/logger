# @adntro/logger
> Simple typescript logger

[![npm version](https://img.shields.io/npm/v/@adntro/logger.svg?style=flat-square)](https://www.npmjs.com/package/@adntro/logger)

## Getting started

Install as a dependency

```
npm i -S @adntro/logger
```

## Usage

```
import { Logger } from '@adntro/logger'


const logger = new Logger('my-class');

logger.debug('This is a trace');   // [my-class][debug] This is a trace
logger.info({ some: 'data' })      // [my-class][info] {"some":"data"}


```


## License
[MIT](LICENSE)

---
Made with ❤️ by the Adntro Genetics Developer Team.
> ***NOTE: This is not an official Adntro product.***
