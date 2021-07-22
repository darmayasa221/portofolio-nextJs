/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import classes from './SocialMedia.module.css';

const SocialMedia = () => {
  const imgStyle = classes.img_style;
  return (
    <ul className={imgStyle}>
      <li>
        <a href='https://www.facebook.com/darma.yasa.221/' target='_blank' rel="noreferrer">
          <img src='/fb.png' alt='facebook'/>
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/darma_yasa221/' target='_blank' rel="noreferrer">
          <img src='ig.png' alt='instagram'/>
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/darma-yasa221/' target='_blank' rel="noreferrer">
          <img src='lk.png' alt='linkedin'/>
        </a>
      </li>
      <li>
        <a href='https://github.com/darmayasa221' target='_blank' rel="noreferrer">
          <img src='git.png' alt='github'/>
        </a>
      </li>
    </ul>
  )
}

export default SocialMedia;