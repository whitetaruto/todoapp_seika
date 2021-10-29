import React, { useState } from 'react'


const Item = ({ content, deleteTodo, id }) => {
    const [isDone, setIsDone] = useState(false);//状態の初期値を記入

    // isdone =>現在の状態の参照
    // setIsDone => 状態を更新する関数
    // todo : checkboxが変更された時、isdoneを変更する

    return (
        <li>
            <input
                type='checkbox'
                onChange={() => {
                    setIsDone(!isDone)
                }}
            />
            <span
                style={
                    { textDecoration: isDone ? 'line-through' : 'none' }
                }
            >{content}
            </span>
            <button onClick={() => deleteTodo(id)}>削除</button>
        </li>
    );
};

export default Item