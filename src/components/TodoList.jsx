import React, { useContext } from 'react'
import { Button } from 'react-native-web'
import styled from 'styled-components/native'
import { MyContext } from './context/MyContext'
import { TodoItem } from './TodoItem'

const StyledView = styled.View`
    margin: 30px 0;
`

const FetchWrapper = styled.View`
    flex-direction: row;
    margin-top: 30px
`   

export const TodoList = () => {

    const {todos, fetchData} = useContext(MyContext)

    if(!todos.length) {
        return (
            <FetchWrapper>
                <Button title="use Fetch Data" onPress={fetchData} />
            </FetchWrapper>
            
        )
    }

    return (
        <StyledView>
            {todos.map(todo => {
                return (
                    <TodoItem key={todo.id} todo={todo}/>
                )
            })}
        </StyledView>
    )
}
