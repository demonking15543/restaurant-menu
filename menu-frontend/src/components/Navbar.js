import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import { AddMenu } from "../components/AddMenu";
import { UpdateMenu } from "../components/UpdateMenu";
import MenuList from './MenuList';


export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/add/"} className="nav-link">
                              Add
                            </Link>
                        </li>
                    </div>



                </div>
            </nav>
            <div className="container m-10">
                 <Switch>
                  <Route exact path={["/", "/menus"]} component={MenuList} />
                   <Route exact path="/add/" component={AddMenu} />
                  <Route exact path="/menu/:id/update/" component={UpdateMenu} />
                </Switch> 
            </div>

            
        </div>
    )
}
