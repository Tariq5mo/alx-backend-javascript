import handleProfileSignup from './6-final-user';

describe('handleProfileSignup', () => {
  it('returns the right array', async () => {
    expect.assertions(1);
    const queue = await handleProfileSignup('John', 'Doe', 'Gerald.jpg');
    expect(queue).toEqual([
      {
        status: 'fulfilled',
        value: { firstName: 'John', lastName: 'Doe' },
      },
      { status: 'rejected', value: 'Error: Gerald.jpg cannot be processed' },
    ]);
  });
});
