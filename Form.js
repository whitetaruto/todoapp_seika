import React, { useState } from "react";


const Form = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                onChange={e => {//テキストを取得する
                    setValue(e.target.value)
                    //console.log(e.target.value)
                }}
            />
        </form>
    )
}

export default Form