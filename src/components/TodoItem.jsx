import React, { useContext } from 'react'
import { CheckBox, Text} from 'react-native-web'
import styled from 'styled-components/native'
import { MyContext } from './context/MyContext'

const StyledTodoItem = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
`
const StyledTodoText = styled.View`
    flex: 1;
    margin: 0 20px;
`

const StyledIconWrapper = styled.View`
    flex-direction: row;
    min-width: 12%;
    justify-content: space-between;
`

const StyledButton = styled.Button`
    margin: 0 10px;
    font-size: 10px;
`

const StyledInput = styled.TextInput`
    border: 1px solid black;
    padding: 10px;
`

const TodoText = styled.Text`
    font-size: 18px;
    font-weight: 500;
`

export const TodoItem = ({todo}) => {

    const {
        todoComplete,
        edit,
        editTodo,
        saveTodo,
        deleteTodo,
        value,
        setValue
    } = useContext(MyContext)

    return (
        <StyledTodoItem>
            <CheckBox value={todo.completed} onChange={() => todoComplete(todo.id)}/>
            <StyledTodoText>
                {edit === todo.id
                ?
                    <StyledInput value={value} onChange={e => setValue(e.target.value)}/>
                :
                <>
                    <TodoText style={todo.completed && {color: '#0000004d'}}>
                        {todo.text}
                    </TodoText>
                    <Text style={todo.completed && {color: '#0000004d'}}>
                        {todo.date}
                    </Text>
                </>
                }
            </StyledTodoText>
            <StyledIconWrapper>
                {edit === todo.id
                ? <StyledButton color={todo.completed && '#888'} title="Save" onPress={() => saveTodo(todo.id)} />
                : <StyledButton color={todo.completed && '#888'} title="Edit" onPress={() => editTodo(todo.id, todo.text)}/>
                }
                <StyledButton color={todo.completed && '#888'} title="Delete" onPress={() => deleteTodo(todo.id)}/>
            </StyledIconWrapper>
        </StyledTodoItem>
    )
}
