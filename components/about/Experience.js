import { Fragment } from 'react';
import classes from './Experience.module.css';

const Experience = () => {
  const aboutExperience = classes.about_experience
  return (
      <Fragment>
          <div className={ classes.education }>
            <h2>Education</h2>
            <hr/>
            <div className={ aboutExperience }>
              <h4>SD 6 Pujungan </h4>
              <h5>2007 - 2013</h5>
            </div>
            <div className={ aboutExperience }>
              <h4>SMP 6 Pujungan</h4>
              <h5>2013 - 2016</h5>
            </div>
            <div className={ aboutExperience }>
              <h4>SMK TI Bali Global Denpasar</h4>
              <h5>2016 - 2018</h5>
              <p>Major: TKJ (Teknik Komputer Jaringan)</p>
            </div>
            <div className={ aboutExperience }>
              <h4>ITB Stikom Bali</h4>
              <h5>2018 - Current</h5>
              <p>Major: Sistem Komputer, Network Security S1</p>
            </div>
          </div>
          <div className={ classes.experience }>
            <h2>Internship</h2>
            <hr/>
            <div className={ aboutExperience }>
              <h4>CV.Magnum Solusion,<cite> IT Suport</cite></h4>
              <h5>july 2016 - oktober 2016</h5>
              <p>The projects I did when I was IT support at Magnum Solution were doing LAN-based network configuration, CCTV settings, and server maintenance.</p>
            </div>
            <div className={ aboutExperience }>
              <h4>Mitrais,<cite> Front-end web development</cite></h4>
              <h5>november 2020 - january 2021</h5>
              <p>Project that I got as Front-end web development using JavaScript, TypeScript and ReactJS.</p>
            </div>
          </div>  
          <div className={ classes.bootcamp }>
            <h2>Bootcamp</h2>
            <hr/>
            <div className={ aboutExperience }>
                <h4>Bangkit 2021, <cite> Cloud Computing </cite></h4>
                <h5> Februari 2021 - juli 2021 </h5>
                <p>Bangkit 2021 is a program held by Google in collaboration with the Indonesian government and also in collaboration with companies and campuses in Indonesia to hold training in the IT field, Path; Mobile development, Cloud Computing, and Machine Learning.
                here the project is in the top 50 from all over Indonesia, more than 500 other projects
                </p>
            </div>
            <div className={ aboutExperience }>
                <h4>IDCamp Indosat Oredoo 2021, <cite> Back-End Developer </cite></h4>
                <h5>  Juni 2021 - juli 2021 </h5>
                <p> This program trains us to become back-end developers who use JavaScript
                </p>
            </div>
          </div>
      </Fragment>
  )
}

export default Experience;
