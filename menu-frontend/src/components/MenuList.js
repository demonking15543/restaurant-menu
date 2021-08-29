import axios from 'axios';
import { useState, useRef, useEffect } from "react"

import { useHistory } from "react-router"
import { baseURL } from "../services/menu.services";

const MenuList = () => {

    const [menus, setMenu] = useState([]);
    const history =  useHistory();
    const countRef  = useRef(0);
    const [deleted, setDeleted] = useState(false);



    useEffect(() => {
        retrieveAllMenus();
    }, [countRef]);

    const retrieveAllMenus = () => {
        axios
        .get(`${baseURL}/menu/`, {
            headers: {
                'content-type': 'application/json'
                
            },       
        })    
        .then((response) => {
            setMenu(response.data);
        })
        .catch((e) => {
            console.error(e);
        });

        
    };
    const deleteMenu = (id) => {
        axios
        .delete(`${baseURL}/menu/${id}/`, {
            headers: {
                'content-type': 'application/json'
            },

        })
        .then((response) => {
            setDeleted(true);
            retrieveAllMenus();
        })
        .catch((e) => {
            console.log(e);
        });

    };

    



    
    
    const handleUpdateClick = (id) => {
        history.push(`/menu/${id}/update/`);
    };
    return (
        <div className="row justify-content-center">
            <div className="col">
                {deleted && (
                            <div
                              className="alert alert-danger alert-dismissible fade show"
                              role="alert"
                            >
                                Menu deleted!
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="alert"
                                  aria-label="Close"
                                >
    
                                </button>


                            </div>                            
                  
                )}


                {menus &&
                menus.map((menu, index) => (
                    
                    <div className="card my-3 " key={menu.id}>
                        <div className="card-body">
                            <h2 className="card-title font-weight-bold">
                                </h2>
                            <h4 className="card-subtitle mb-2">{menu.price}</h4>
                            <p className="card-text">{menu.description}</p>
                        </div>
                        <div className="card-footer">
                        <div
                            className="btn-group justify-content-around w-75 mb-1 "
                            data-toggle="buttons"
                        >
                            <span>
                                <button
                                  className="btn btn-info"
                                  onClick={() => handleUpdateClick(menu.id)}
                                >
                                  Update
                                </button>
                            </span>
                            <span>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => deleteMenu(menu.id)}
                                >
                                  Delete
                                </button>
                            </span>


                        </div>
   
        
                        
                    </div>
                </div> 
    
                    
      
                ))}

                
            </div>
        </div>        
  
    );




    
}

export default MenuList