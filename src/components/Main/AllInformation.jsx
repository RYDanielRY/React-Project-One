import React from "react";
import './allWatch.css';

const AllInformation = () => {
    return (
        <div className="containerForAllInformation">
            <div>
                <h1>
                    Информация об спортсмене
                </h1>
                <p>
                    Кабанова Анастасия Александровна
                </p>
            </div>
            <div className="tableContainer">
                <table>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Фамилия
                        </th>
                        <th>
                            Завтрак
                        </th>
                        <th>
                            Обед
                        </th>
                        <th>
                            Полдник
                        </th>
                    </tr>
                    <tr>
                        <th>
                            101
                        </th>
                        <th>
                            Кабанова
                        </th>
                        <td>
                            Чай с молоком
                        </td>
                        <td>
                            Фуагра
                        </td>
                        <td>
                            Булка
                        </td>
                    </tr>
                </table>
            </div>
            <div className="buttons">
                <button>
                    Обновить
                </button>
            </div>
            <div className="buttons">
                <button>
                    Удалить
                </button>
            </div>
        </div>
    )
}

export default AllInformation;