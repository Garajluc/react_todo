import React, {Component} from 'react';
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBehance, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class About extends Component {

    render() {
        return (
            <section className="as_ col-md-6 col-xs-12">
                <div className="as_header">
                    <h1>About the project</h1>
                </div>
                <div className="as_intro">
                    <p className="as_top">
                        This project is a simple 'To Do List' that was made as a practical exercise to learn React.
                    </p>
                    <p className="as_middle">
                        The 'To Do List' uses local storage of the client's browser, so all the data stays in the user's local storage until the storage is cleared.
                        The other features are 'add', 'delete' and 'edit' the tasks.
                        By clicking on the task's title, the details of the specific task, that are not originally visible, are revealed.
                    </p>
                </div>
                <div className="as_bottom">
                    <ul className="as_bottom_social_list">
                        <li>
                            <a href="https://www.behance.net/luciagaraj5beb" target="_blank"><FontAwesomeIcon icon={faBehance}/></a>
                        </li>
                        <li>
                            <a href="https://github.com/Garajluc" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/lucia-garajova/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default About;

