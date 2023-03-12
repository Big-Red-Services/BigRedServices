import {useState, useEffect} from 'react';
import ProjectList from './ProjectList';
const Home = () => {

    const [projects, setProjects] = useState([
        { title: 'New CIAS Website Needed', description: 'We need a new website for our upcoming conference CMUNC. Please dm if you\'re interested.', author: 'CIAS', 
        email: 'cias@cornell.edu', id: 1 },
        { title: 'Programmers needed for DNA Sequencing', description: 'We\'re trying to do biology stuff but don\'t know any code beyond the genetic stuff. Please halpppp.', 
        email: 'dna@cornell.edu', author: 'Ms. Bio', id: 2 },
        { title: 'Internship App', description: 'You need a job, I need a job, everyone needs a job! We need someone who could build us an app for internships. This would also look great on your resume wink wink.', 
        author: 'Cornell Career Services', email: 'cornellcareer@cornell.edu', id: 3 },
        { title: 'Consulting Website Needed', description: 'We need to build a website for our client. We have the business plan figured out but can\'t build the actual product. Please dm if you\'re interested.', author: 'Dyson Kid', 
        email: 'dyson123@cornell.edu', id: 4 },
        { title: 'Greek Peak App', description: 'We\'d like to build an app so drunk Cornell students can find their way around Greek Peak\'s five runs.', author: 'Ski Club', 
        email: 'ski@cornell.edu', id: 5 }
    ]);

    return ( 
        <div className="home">
            <ProjectList projects={projects} title = "Projects"/>
            
        </div>

     );
}
 
export default Home;