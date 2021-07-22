import classes from './Projects.module.css';

const Projects = () => {
  const about_projects = classes.about_projects

  return (
    <div className={ classes.about_project }>
      <h2>Projects</h2>
      <hr />
      <div className={ about_projects }>
        <h4><cite>Software development with new JavaScript technology: TypeScript, and SDLC approach using Agile: SCRUM</cite></h4>
        <h5>Github : <a target='_blank' rel="noreferrer" href='https://github.com/darmayasa221/app-form-typescript'>https://github.com/darmayasa221/app-form-typescript</a> </h5>
        <p>Build a website using TypeScript and pay attention to code security and validation security (form validation) using ReactJs, TypeScript, Taillwind </p>
      </div>
      <div className={ about_projects }>
        <h4><cite>Simple Website Secure Validation on Input Form to prevent XSS Attacker</cite></h4>
        <h5>Github : <a target='_blank' rel="noreferrer" href='https://github.com/darmayasa221/secure-validation-form-xss-native'>https://github.com/darmayasa221/secure-validation-form-xss-native</a> </h5>
        <p>I made this website for an input to avoid xss attacks, the website uses the native php programming language</p>
      </div>
      <div className={ about_projects }>
        <h4><cite>Back-end deployment and Machine Learning using GCP</cite></h4>
        <h5>Github : <a target='_blank' rel="noreferrer" href='https://github.com/Capstone-B21-CAP0220/RestSwacAppV2'>https://github.com/Capstone-B21-CAP0220/RestSwacAppV2</a> </h5>
        <p>This project is called SWAC (Save Woman And Child) there is a project to get the top 50 in Indonesia when participating in the Bangkit 2021 program and I took the cloud computing division</p>
      </div>
      <div className={ about_projects }>
        <h4><cite>Book Self Rest API</cite></h4>
        <h5>Github : <a target='_blank' rel="noreferrer" href='https://github.com/darmayasa221/bookshelf-API-NodeJS-hapi'>https://github.com/darmayasa221/bookshelf-API-NodeJS-hapi</a></h5>
        <h5>Github : <a target='_blank' rel="noreferrer" href='https://github.com/darmayasa221/bookshelf-API'>https://github.com/darmayasa221/bookshelf-API</a></h5>
        <p>Create an API using Node Js with the Hapi Framework and ExpressJs which has CRUD features on the GET, POST, UPDATE methods</p>
      </div>
      <div className={ about_projects }>
        <h4><cite>Food Store</cite></h4>
        <h5>Github : <a target='_blank' rel="noreferrer" href='https://github.com/darmayasa221/food-store'>https://github.com/darmayasa221/food-store</a></h5>
        <p>Create an Webisite Using ReactJS and Powerfull State Management and Perpormance</p>
      </div>
      <div className={ about_projects }>
        <h4><cite>Soket IO Client Server Chat APP</cite></h4>
        <h5>Github : <a target='_blank' rel="noreferrer" href='https://github.com/darmayasa221/Python-socket-chat-room-'>https://github.com/darmayasa221/Python-socket-chat-room-</a></h5>
        <p>Create a chat application using socket IO in python</p>
      </div>
      <div className={ about_projects }>
        <h4><cite>Wedding Website</cite></h4>
        <h5>Github : <a target='_blank' rel="noreferrer" href='https://github.com/darmayasa221/wedding'>https://github.com/darmayasa221/wedding</a></h5>
        <p>Create an online invitation website using a HTML, CSS, JavaScript</p>
      </div>
      <div className={ about_projects }>
        <h4><cite>Portofolio</cite></h4>
        <h5>Github : <a target='_blank' rel="noreferrer" href='https://github.com/darmayasa221/portofolio-nextJs'>https://github.com/darmayasa221/portofolio-nextJs</a></h5>
        <h5>Github : <a target='_blank' rel="noreferrer" href='https://github.com/darmayasa221/portofolio'>https://github.com/darmayasa221/portofolio</a></h5>
        <p>Create an Portofolio using Native HTML, and using NextJs</p>
      </div>
    </div>
  )
};

export default Projects;
