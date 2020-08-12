import { EncrypterPipe } from './encrypter.pipe';

describe('EncrypterPipe', () => {
  it('create an instance', () => {
    const pipe = new EncrypterPipe();
    expect(pipe).toBeTruthy();
  });
});
