import { useState } from 'react';
import Social from '../social/Social'
import classes from './Layout.module.css'
import RightSide from './RightSide'

const Layout = props => {
  const [mode, setMode] = useState(false)
  const modeHandler = () => {
    if (!mode) {
      setMode(true)
      
    } else {
      setMode(false)
    }
  }
  return (
    <div className={mode? `${classes.dark}` : `${classes.light}` }>
      <div className={ classes.layout }>
        <div className={ classes.wraper }>
          <Social />
          <RightSide 
            modeHandler={ modeHandler }
            mode={ mode }
            >
            {props.children}
          </RightSide>
        </div>
      </div>
    </div>
  )
};

export default Layout;
