import { okok } from './ciclo/fisrtFunction';

describe('Test Addition', ()=>{

  it('Testing addition function',()=>{
    expect(okok(10,20)).toBe(30);
  });

});