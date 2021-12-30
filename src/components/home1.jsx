import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cer from "../img/cer.png";
class Home1 extends Component {
  state = {
   
  };
  render() {
    return (
      <>
        <div className="main">
          <Link to="/main">Вход в систему</Link>
          <div className="name">
            <img src={Cer} alt="" />
            <h1>
              Информационная системы <br />
              по мониторингу <br />
              медицинских учреждений <br />
              и других разрешенных мест <br />
              для лечения пациентов с коронавирусом
              <br />
              «BEMOR.SSV.UZ» («KASAL.UZ»)
            </h1>
          </div>
        </div>
      </>
    );
  }
}
export default Home1;
