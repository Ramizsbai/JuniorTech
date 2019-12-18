
import React, { Component } from 'react';
import './footer.css';
import './responsive-home-footer.css';
import { Button } from 'reactstrap';
import Icon from './facebook.png';
import Icon1 from './instagram.png';
import Icon2 from './linkedin.png';
import Icon3 from './twitter.png';



export class Footer extends Component {
    render() {
        return (


            <div className="footer-home">
                <div className="footer-image">
                    <h2 id="Subscribe"> Subscribe Now ! </h2>
                    <div className="home-footer2">
                        <input className="input-footer" type="text" placeholder="Email address"></input>
                       <div className="button-footer"> <Button className=" d-flex ml-3 my-auto" color="success">Send</Button></div>
                    </div>
                    <div className="flex-row">
                        <ul className="footer-list">

                            <h4 className="footer-list1">Contact Us</h4>

                            <li>contact us</li>
                            <li>contact us</li>
                            <li>contact us</li>
                        </ul>
                        <ul className="footer-list">

                            <h4 className="footer-list1">Contact Us</h4>

                            <li>contact us</li>
                            <li>contact us</li>
                            <li>contact us</li>
                        </ul>
                        <div className="footer-icons">
                            <div>
                                <h4 className="footer-list1">Find us</h4>
                            </div>
                            <div>
                                <img className="Icon mr-2" src={Icon} alt="footer-icon" />
                                <img className="Icon1 mr-2" src={Icon1} alt="footer-icon1" />
                                <img className="Icon2 mr-2" src={Icon2} alt="footer-icon2" />
                                <img className="Icon3 mr-2" src={Icon3} alt="footer-icon3" />
                            </div>
                        </div>
                    </div>

                    <div className="LastPart mx-auto container">
                        <div className="copyright">
                            <p className="my-auto">Cobyright by: Stonres</p>
                        </div>
                    </div>
                </div>
   
           
            </div>
        );

    }

}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={{ root: classes.root, backgroundColor: classes.backgroundColor }} >
            <Router>
                <AppBar position="static" className={classes.backgroundColor}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
          </Typography>
                        <Button color="inherit"></Button>
                    </Toolbar>
                </AppBar>
            </Router>
        </div>
    );
}