
import profilePic from  '../assets/avatar.png'


const About = () => {
  return (    
    <section>
        <h1>About Me</h1>
        <img src={profilePic} alt="Profile picture" className='profileImg'/>
      </section>
    )
  }

export default About;
