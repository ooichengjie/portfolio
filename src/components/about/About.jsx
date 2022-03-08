import "./about.css"
import Oscar from "../../img/oscar.jpg"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src="https://wallpaperaccess.com/full/795912.jpg" alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                I am a graduate in pure sciences.
                With the strong interest in programming.
                I am seeking for the lifelong career in technogy field.   
            </p>
            <p className="a-desc">
                This is the brief story of mine. 
                I hold a degree in physics and a master in mathematics from USM.
                But my interest in programming. For me, sciences and technology is inter-related. 
            </p>
            <div className="a-award">
                <img src={Oscar} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">Softskills</h4>
                    <p className="a-ward-desc">
                    As a computer scientist, I knows about the fundamental of computer. The architecure of computer is very complex. Hardware and software plays a ultimate role in the computing.
                    without either one, the world could not progress!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
