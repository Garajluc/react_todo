import React, {Component} from 'react';
import "./About.css";

class About extends Component {

    render() {
        return (
            <section className="as_ col-md-6 col-xs-12">
                <div className="as_header">
                    <h1>About the project</h1>
                </div>
                <div className="as_intro">
                    <p className="as_top">
                        This project is a simple To Do list that was made as a practical exercise to learn React.
                    </p>
                    <p className="as_middle">
                        The To Do list uses local storage of the client's browser, so al the data stays in the user's local storage until the storage is cleared.
                        The other features are "add", "delete" and "edit" the tasks.
                        By clicking on the task's title, the details of the specific task, that are not originally visible, are revealed.
                    </p>
                </div>
            </section>
        )
    }
}

export default About;