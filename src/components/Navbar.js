import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import logo from '../images/logo.png'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img style={{width:"250px", height:"90px"}} src={logo} alt="Temul"/>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"></FaAlignRight>
                        </button>
                    </div>
                    <ul className={this.state.isOpen? "nav-links show-nav":"nav-links "}>
                        <li>
                            <Link to="/today-word">Өнөөдрийн үг</Link>
                        </li>
                        <li>
                            <Link to="/saved-word">Хадгалсан үг</Link>
                        </li>
                        <li>
                            <Link to="/pronouncation">Дуудлагаа сайжруулъя</Link>
                        </li>
                        <li>
                            <Link to="/new-word">Шинэ үгс</Link>
                        </li>
                        <li>
                            <Link to="/add-word">Үг нэмэх</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
