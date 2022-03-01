import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify} from './imports';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google}/>
        <img src={slack}/>
        <img src={atlassian}/>
        <img src={dropbox}/>
        <img src={shopify}/>
      </div>
    </div>
  )
}

export default Brand