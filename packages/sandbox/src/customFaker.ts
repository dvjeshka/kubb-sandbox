import { Faker, ru } from '@faker-js/faker';
// const { Faker, es } = require('@faker-js/faker');

// create a Faker instance with only es data and no en fallback (=> smaller bundle size)
export const customFaker = new Faker({ locale: [ru], seed: 1234, });

