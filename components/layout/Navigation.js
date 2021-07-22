/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import classes from './Navigation.module.css';

const Navigation = props => {
  return (
    <nav className={props.mode ? `${classes.navigation_dark}` : `${classes.navigation}`}>
      <ul>
        <li>
          <Link href='/'>Darma Yasa</Link>
        </li>
        <li>
          <Link href='/profile'>Profile</Link> 
        </li>
        <li>
          <Link href='/experience'>Experience</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
      </ul>
      <div className={classes.mode}>
        {!props.mode && <img onClick={ props.modeHandler } src='/dark.png' alt='dark mode' />} 
        {props.mode && <img onClick={ props.modeHandler } src='/light.png' alt='light mode' />} 
      </div>
    </nav>
  )
}

export default Navigation;
