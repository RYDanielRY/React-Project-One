let store = {
    _state: {
        posts: [
            {id: 1, firstName: "Иван", middleName: "Александровна", lastName: "Иванов", kindOfSports: "Плавание", numberCourse: 3},
            {id: 2, firstName: "Владимир", middleName: "Андреевич", lastName: "Петров", kindOfSports: "Хоккей", numberCourse: 4},
            {id: 3, firstName: "Диана", middleName: "Максимовна", lastName: "Александровна", kindOfSports: "Футбол", numberCourse: 4},
        ],
    },
    getState() {
        return this._state;
    },
    _rerenderIntireTree(){},
    subscriber(observer){
        observer = this._rerenderIntireTree();
    }
}

export default store;