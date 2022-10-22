import React, { Component } from 'react'
import './components/root.css'
import Header from './components/Header/index.jsx'
import List from './components/TodoList/index.jsx'
import Footer from './components/footer'

export default class App extends Component {
    state = {
        todos:[
            {
                id:'001',
                checkVal: false,
                txt: '这是列表一',
            },
            {
                id:'002',
                checkVal: true,
                txt: '这是列表2'
            },
            {
                id:'003',
                checkVal: false,
                txt: '这是列表3'
            },
            {
                id:'004',
                checkVal: false,
                txt: '这是列表4'
            }
        ]
    }
    addTodos = (todoObj)=>{
        const newObj = [todoObj,...this.state.todos]
        this.setState({
            todos: newObj
        })
    }
    deleteTodo = (index)=>{
        const {todos} = this.state
        todos.splice(index,1)
        this.setState({
            todos
        })
    }
    deleteAllList = ()=>{
        const {todos} = this.state
        const newTodos = todos.filter((item)=>{
            return !item.checkVal
        })
        this.setState({
            todos: newTodos
        })
    }
    changeState = (index)=>{
        const {todos} = this.state
        todos[index].checkVal = !todos[index].checkVal
        this.setState({
            todos
        })
    }
    changeAllCheck=(e)=>{
        const {todos} = this.state
        console.log(e);
        const newTodos = todos.map((item)=>{
            return {...item,checkVal:e}
        })
        console.log(newTodos);
        this.setState({
            todos: newTodos
        })
    }
    render() {
        const {todos} = this.state
        return (
            <div>
                <Header addTodos={this.addTodos}/>
                <List 
                    todos={this.state.todos} 
                    deleteTodo={this.deleteTodo}
                    changeState={this.changeState}
                />
                <Footer
                    todos={todos}
                    deleteAllList={this.deleteAllList}
                    changeAllCheck={this.changeAllCheck}
                />
            </div>
        )
    }
}
