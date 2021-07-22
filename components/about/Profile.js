import { Fragment } from 'react'
import classes from './Profile.module.css'

const Profile = () => {
  const about = classes.about

  return (
    <Fragment>
      <div className={ classes.page_profile }>
        <h2>About</h2>
        <hr/>
        <div className={ about }>
          <h3> Name </h3>
          <h4> I Made Darma Yasa</h4>
        </div>
        <div className={ about }>
          <h3> Date fo birth </h3>
          <h4> 7 April 2000</h4>
        </div>
        <div className={ about }>
          <h3> Phone </h3>
          <h4> +62 859-5370-1473</h4>
        </div>
        <div className={ about }>
          <h3> Email </h3>
          <h4> darmayasa221@hotmail.com </h4>
        </div>
        <div className={ about }>
          <h3> Address </h3>
          <h4> Tabanan, Bali</h4>
        </div>
      </div>
      <div className={ classes.hobi }>
        <h2>Hobbis</h2>
        <hr/>
        <p>My hobbies are reading books, interested in new things, especially in the world of technology and when I have free time I prefer to meditate and fishing</p>
      </div>
    </Fragment>
  )
}

export default Profile