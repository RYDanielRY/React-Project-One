import React, {useState} from "react";
import './Styles/app.css';
import PostList from "./Components/PostList";

function App() {

    const [posts, setPostes] = useState(
        [
            {id: 1, title: 'JavaScript', body: 'Язык Программирования'},
            {id: 2, title: 'Java', body: 'Язык Программирования'},
            {id: 3, title: 'C#', body: 'Язык Программирования'},
            {id: 4, title: 'Python', body: 'Язык Программирования'},
            {id: 5, title: 'LIPS', body: 'Язык Программирования'}
        ]
    );

    const [posts2, setPostes2] = useState(
        [
            {id: 1, title: 'JavaScript', body: 'Язык Программирования'},
            {id: 2, title: 'Java', body: 'Язык Программирования'},
            {id: 3, title: 'C#', body: 'Язык Программирования'},
            {id: 4, title: 'Python', body: 'Язык Программирования'},
            {id: 5, title: 'LIPS', body: 'Язык Программирования'}
        ]
    );

    return (
    <div className="App">
        <PostList post={posts} title="Список постов 1"></PostList>
        <PostList post={posts2} title="Список постов 2"></PostList>
    </div>
  );
}

export default App;
