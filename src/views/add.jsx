import React, { Component } from "react";
import {Link} from "react-router-dom"
class Add extends Component {
  state = {};
  render() {
    return (
      <>
      <div className="container">
          <div className="nazad">
        <Link to="/sot">Назад</Link>
          </div>
        <div className="tab">
          <div className="head">
              <div className="d1">
                <b>№</b>
              </div>
              <div className="d2">
                <b>Наименования сведений</b>
              </div>
              <div className="d3">
                <b>Тип сведений</b>
              </div>
              <div className="d4">
                <b>Примечание</b>
              </div>
          </div>
          <div className="one">
            <h1>Основные данные</h1>
          </div>
          <div className="two">
            <div className="d1">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
            </div>
            <div className="d2">
              <p>ПИНФЛ</p>
              <p>Серия+номер паспорта</p>
              <p>Дата рождения</p>
              <p>Фамилия</p>
              <p>Имя</p>
              <p>Отчество</p>
            </div>
            <div className="d3">
              <input />
              <input />
              <input />
              <input />
              <input />
              <input />
            </div>
            <div className="d4">
              <input />
              <input />
              <input />
              <input />
              <input />
              <input />
            </div>
            </div>
            <div className="one">
            <h1>Данные сотрудника</h1>
          </div>
          <div className="two">
            <div className="d1">
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
              <p>11</p>
              <p>12</p>
              <p>13</p>
              <p>14</p>
            </div>
            <div className="d2">
              <p>Регион проживания</p>
              <p>Район проживания</p>
              <p>Лечебное учреждение</p>
              <p>Тип</p>
              <p>Специализация</p>
              <p>Номер карты</p>
              <p>ИНН</p>
              <p>Пол</p>
            </div>
            <div className="d3">
              <input />
              <input />
              <input />
              <input />
              <input />
              <input />
              <input />
              <input />
            </div>
            <div className="d4">
              <input />
              <input />
              <input />
              <input />
              <input />
              <input />
              <input />
              <input />
            </div>
            </div>
            <div className="one">
            <h1>Адрес</h1>
            </div>
            <div className="two">
            <div className="d1">
              <p>15</p>
              <p>16</p>
              <p>17</p>
              <p>18</p>
              <p>19</p>
            </div>
            <div className="d2">
              <p>Гражданство</p>
              <p>Регион проживания</p>
              <p>Район проживания</p>
              <p>Адрес</p>
              <p>Телефон</p>
            </div>
            <div className="d3">
              <input />
              <input />
              <input />
              <input />
              <input />
            </div>
            <div className="d4">
              <input />
              <input />
              <input />
              <input />
              <input />
            </div>
            </div>
            <div className="one">
            <h1>Аутентификация</h1>
            </div>
            <div className="two">
            <div className="d1">
              <p>20</p>
              <p>21</p>
            </div>
            <div className="d2">
              <p>Логин</p>
              <p>Пароль</p>
            </div>
            <div className="d3">
              <input />
              <input />
            </div>
            <div className="d4">
              <input />
              <input />
            </div>
            </div>
            <div className="one">
            <h1>Роли</h1>
            </div>
            <div className="two">
            <div className="d1">
              <p>22</p>
            </div>
            <div className="d2">
              <p>Наименования роли</p>
            </div>
            <div className="d3">
              <input />
            </div>
            <div className="d4">
              <input />
            </div>
          </div>
          <button><Link to="/sot">Создать сотрудника</Link></button>
        </div>
        </div>
      </>
    );
  }
}
export default Add;
