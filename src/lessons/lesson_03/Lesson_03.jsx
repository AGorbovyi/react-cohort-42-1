import User_Card from "../../components/Card/User_Card";

import "./styles.css";

function Lesson_03() {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Safety Inspector",
    hobby: "beer Duff",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    job: "No job",
    hobby: "cooking",
    avatarURL: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
  };

  const bartSimpson = {
    firstName: "Bart",
    lastName: "Simpson",
    job: "No job",
    hobby: "Skating",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };


  return (
    <div className="lesson03-wrapper">
      <User_Card 
      firstName={homerSimpson.firstName} 
      lastName={homerSimpson.lastName}
      avatarURL={homerSimpson.avatarURL}
      job={homerSimpson.job}
      hobby={homerSimpson.hobby}
      />

      <User_Card 
      firstName={margeSimpson.firstName}
      lastName={margeSimpson.lastName}
      avatarURL={margeSimpson.avatarURL}
      job={margeSimpson.job}
      hobby={margeSimpson.hobby}/>

      <User_Card 
      firstName={bartSimpson.firstName}
      lastName={bartSimpson.lastName}
      avatarURL={bartSimpson.avatarURL}
      job={bartSimpson.job}
      hobby={bartSimpson.hobby}/>
    </div>
  );
}

export default Lesson_03;