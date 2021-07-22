/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import LeftSide from '../layout/LeftSide';
import classes from './Social.module.css';
import SocialMedia from './SocialMedia';

const Social = () => {
  return (
    <LeftSide>
      <div className={ classes.foto_background }>
        <img src='/me.jpeg' alt='this is my foto' />
      </div>
      <div className={classes.identities}>
          <h1>I Made Darma Yasa</h1>
          <p>Cloud engginer & Front-End Developer</p>
        </div>
      <div className={ classes.social_media }>
        <SocialMedia />
      </div>
    </LeftSide>
  )
};

export default Social;
