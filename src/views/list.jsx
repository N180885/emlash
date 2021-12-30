import React, { Component } from "react"
import {Link} from "react-router-dom"
class List extends Component {
    state={}
    render() {
        return (
            <>
           <div className="container">
          <div className="nazad">
        <Link to="/sot">Назад</Link>
          </div>
          <div className="links">
            <p>список сотрудников  бу ерда руйхат булиши керак</p>
          </div>
          </div>
            </>
        )
    }
}
export default List;