import React, { useContext } from 'react'
import { View } from 'react-native-web'
import styled from 'styled-components/native'
import { MyContext } from './context/MyContext'

const StyledTodoHeader = styled.Text `
    font-size: 50px;
    margin: 20px 0;
`

const StyledTodoInput = styled.TextInput`
    border: 1px solid black;
    padding: 10px;
`

export const TodoHeader = () => {

    const {
        inputValue, 
        setInputValue,
        addTodo
    } = useContext(MyContext)

    return (
        <View>
            <StyledTodoHeader>
                ToDo's
            </StyledTodoHeader>
            <StyledTodoInput 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onSubmitEditing={addTodo}
                placeholder="Write something..."
            />
        </View>
    )
}
