import React from 'react'
import Item from './Item'

const List = ({ todos, deleteTodo }) => {
    //データの数（todosの個数）だけItemコンポーネントを呼び出す
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <Item
                        key={todo.id}
                        id={todo.id}
                        deleteTodo={deleteTodo}
                        content={todo.content}
                    />
                );
            })}
        </ul>
    );
};
export default List

