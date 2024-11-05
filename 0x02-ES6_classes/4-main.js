import Currency from './3-currency.js';
import Pricing from './4-pricing.js';

describe('pricing class', () => {
  it('pricing is implemented correctly', () => {
    expect.assertions(3);
    const price = new Pricing(100, dollar);
    expect(price.amount).toBe(100);
    expect(price.currency).toBe(dollar);
    expect(price.displayFullPrice()).toBe('100 Dollars ($)');
  });
});
