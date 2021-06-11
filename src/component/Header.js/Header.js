import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import './Header.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const mapStateToProps=state=>{
    return({
        token:state.token
    })
}

export class Header extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar dark expand="md" className='Navbar'  >
                    <NavbarBrand href="/">Bay-Bengal</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} style={{textAlign:'center'}} navbar>
                        <Nav className="ml-auto" style={{ marginLeft: 'auto' }} navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/"  >Home</NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink tag={Link} to='/about' >About</NavLink>
                            </NavItem> */}
                            <UncontrolledDropdown  nav inNavbar>
                                <DropdownToggle  nav caret>
                                    Rooms
                                 </DropdownToggle>
                                <DropdownMenu style={{textAlign:'center'}} right>
                                    <DropdownItem tag={Link} to='/room/single' >
                                        Single
                                </DropdownItem>
                                    <DropdownItem tag={Link} to='/room/double'>
                                        Double
                                    </DropdownItem>
                                    
                                    <DropdownItem tag={Link} to='/room/triple'>
                                        Triple
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            {this.props.token===null?<><NavItem>
                                <NavLink tag={Link} to='/login'  >Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/signup"  >Sign Up</NavLink>
                            </NavItem>  </>:
                            <>
                            <NavItem>
                                <NavLink tag={Link} to="/history"  >History</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/logout"  >Log Out</NavLink>
                            </NavItem>
                            </>
                            }  
                        </Nav>
                        
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default connect(mapStateToProps) (Header)
