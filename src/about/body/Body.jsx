import React, { Component } from 'react'
import bodyComponent from './bodyComponent/BodyComponent';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [
                {
                    name: "Tamim",
                    company: "Mac",
                    discription: "Met at my spot"
                },
                {
                    name: "Hamada",
                    company: "Mac",
                    discription: "Met at my spot"
                },
                {
                    name: "Ramiz",
                    company: "Mac",
                    discription: "Met at my spot"
                },
                {
                    name: "Alisio",
                    company: "Mac",
                    discription: "Met at my spot"
                },
                {
                    name: "Yasser",
                    company: "Mac",
                    discription: "Met at my spot"
                },
            ]
        }
    }
    render() {
        let Example = this.state.people.map(person => {
            return (
                <div>
                    <Example person={person} />
                </div>
            )

        })
        return (

            <div>

                <bodyComponent />
            </div>

        )
    }
}

export default Body;