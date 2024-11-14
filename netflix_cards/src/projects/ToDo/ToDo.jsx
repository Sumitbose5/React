import { useState } from 'react';
import './ToDo.css'
import { ToDoForm } from './ToDoForm';
import { ToDoList } from './ToDoList';
import { TodoDate } from './ToDoDate';
import { getLocalStorageToDoData, setLocalStorageToDoData } from './ToDoLocalStorage';


export const ToDo = () => {
    const [task, setTask] = useState(() => getLocalStorageToDoData());

    const handleFormSubmit = (inputValue) => {
        const {id, content, checked} = inputValue;

        // To check if the field is empty or not
        if(!content) return;

        // To check if the data is already existing or not
        // if(task.includes(content)) return;   Cannot use this because inputValue is an object
        const ifTodoContentMatched = task.find(
            (currTask) => currTask.content === content
        );
        if(ifTodoContentMatched) return;
        
        setTask((prevTask) => [...prevTask, {id, content, checked}])
    }

    // Add Data to Local Storage
    setLocalStorageToDoData(task);

    // Delete Functionality
    const handleDelete = (value) => {
        const updatedTask = task.filter((currTask) => currTask.content !== value);
        setTask(updatedTask);
    }

    // Clear All Button
    const handeClearAll = () => {
        setTask([]);
    }

    // Check Button
    const handleCheck = (val) => {
        const updatedTask = task.map((currTask) => {
            if(currTask.content === val){
                return {...currTask, checked : !currTask.checked}
            }
            else{
                return currTask;
            }
        });
        setTask(updatedTask);
    }


    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate />
            </header>
            
            <ToDoForm onAddTodo={handleFormSubmit}/>

            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((currTask) => {
                            return (
                                <ToDoList 
                                    key={currTask.id} 
                                    data={currTask.content} 
                                    checked={currTask.checked}
                                    onHandleDelete={handleDelete}
                                    onHandleCheckedTodo={handleCheck}
                                />
                            );
                        })
                    }
                </ul>
            </section>

            <section>
                <button className='clear-btn' onClick={handeClearAll}>Clear All</button>
            </section>
        </section>
    );
}