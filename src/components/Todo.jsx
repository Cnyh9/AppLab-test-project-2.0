import axios from 'axios'
import moment from 'moment'
import React, { useState } from 'react'
import styled from 'styled-components/native'
import { MyContext } from './context/MyContext'
import { TodoHeader } from './TodoHeader'
import { TodoList } from './TodoList'

const StyledContainer = styled.View`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
`

export const Todo = () => {
    
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    // Получение данных с сервера
    const fetchData = async () => {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const result = responce.data.map((el,i) => {
            return {
                id: i,
                text: el.title,
                date: el.body,
                completed: false
            }
        })
        setTodos(result);
    }

    // Изменение состояния чек-бокса
    const todoComplete = id => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }
    // Проверка на дубль
    const handleSubmit = () => {
        let flag = true
        todos.forEach(todo => {
            if(todo.text.toLowerCase() === inputValue.toLowerCase()) {
                flag = false
            }
        })
        return flag
    }

    // Добавление todo без повтора и пустых todo
    const addTodo = () => {
        if(inputValue.trim() && handleSubmit()) {
            setTodos([
                ...todos, {
                    id: Date.now(),
                    date: moment().format('MMM D, HH:mm:ss'),
                    text: inputValue,
                    completed: false
                }
            ])
            setInputValue('')
        } else {
            alert('Note should not be empty and repeated')
        }
    }

    // Удаление todo
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    // Изменение todo
    const editTodo = (id, text) => {
        setEdit(id)
        setValue(text)
    }

    // Сохранение измененного todo
    const saveTodo = id => {
        let newTodo = [...todos].map(todo => {
            if (todo.id === id) {
                todo.text = value
            }
            return todo
        })
        setTodos(newTodo)
        setEdit(null)
    }

    return (
        <MyContext.Provider value={{
            inputValue,
            setInputValue,
            todos,
            setTodos,
            todoComplete,
            addTodo,
            deleteTodo,
            editTodo,
            saveTodo,
            edit,
            value,
            setValue,
            fetchData
        }}>
            <StyledContainer>
                <TodoHeader />
                <TodoList />
            </StyledContainer>
        </MyContext.Provider>
    )
}
