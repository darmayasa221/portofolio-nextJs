/* eslint-disable @next/next/no-img-element */
import classes from './RightSide.module.css';
import Navigation from "./Navigation";

const RightSide = props => {
  return (
    <div className= { classes.right_side }>
      <Navigation 
        modeHandler={props.modeHandler}
        mode={props.mode}
        />
      <div className={ props.mode ? `${ classes.main_container_dark }` : `${classes.main_container}` }>
        {props.children}
      </div>
    </div>
  )
};

export default RightSide;
