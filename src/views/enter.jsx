import React, {Component} from 'react';
import {Link} from "react-router-dom"
class Enter extends Component {
    state={
        login:"",
        parol:""
    }
    render(){
    return(
        <>
         <div className="log">
             <div className="log1">
               <h1>Регистрация </h1>
               <div className="login">                 
                 <input
                   OnChange={(e) => this.setState({ login: e.target.value })}
                   type="text"
                   placeholder="Введите Имя"
                 />
               </div>
               <div className="parol">                 
                 <input
                   OnChange={(e) => this.setState({ parol: e.target.value })}
                   type="text"
                   placeholder="Введите фамилию"
                 />
               </div>
               <div className="parol">                 
                 <input
                   OnChange={(e) => this.setState({ parol: e.target.value })}
                   type="text"
                   placeholder="Введите отчество"
                 />
               </div>
               <Link to="/">Регистрация</Link>
             </div>
           </div>
        </>
    )
}
}
export default Enter;