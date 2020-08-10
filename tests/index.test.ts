// import app from '../src/hello';
import build from '../app/application';

import { expect } from 'chai';

describe('Hello function', ()=>{
    it('should return hello world', async()=>{
        const app = build();
        const response = await app.inject({
            method: 'GET',
            url: '/ping'
          });
        expect(response.body).to.equal('Hello World!')
    })
})