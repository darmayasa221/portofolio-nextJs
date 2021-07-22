import classes from './LeftSide.module.css';

const LeftSide = props => {
  return (
    <div className={classes.left_side}>
      {props.children}
    </div>
  )
}; 

export default LeftSide;