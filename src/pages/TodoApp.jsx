import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 40px;
background: #fff;
border-radius: 15px;
box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
max-width: 500px;
margin: 50px auto;
`;

const Title = styled.h2`
color: #333;
margin-bottom: 20px;
font-size: 24px;
text-align: center;
`;

const Input = styled.input`
margin-bottom: 20px;
padding: 12px;
border: 1px solid #ccc;
border-radius: 5px;
width: 100%;
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
font-size: 16px;
transition: border-color 0.3s;

&:focus {
border-color: #007bff;
outline: none;
}
`;

const Button = styled.button`
padding: 12px 20px;
background-color: #007bff;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 16px;
transition: background-color 0.3s;
margin-bottom: 20px;

&:hover {
background-color: #0056b3;
}
`;

const TaskList = styled.ul`
list-style-type: none;
padding: 0;
width: 100%;
`;

const TaskItem = styled.li`
background: #f9f9f9;
border-radius: 5px;
padding: 10px;
margin-bottom: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
font-size: 16px;
transition: background-color 0.3s;
display: flex;
justify-content: space-between;
align-items: center;

&:hover {
background-color: #f1f1f1;
}

button {
margin-left: 10px;
background: transparent;
border: none;
color: red;
cursor: pointer;
font-size: 16px;

&:hover {
color: darkred;
}
}
`;

const EditInput = styled.input`
margin-left: 10px;
padding: 6px;
border: 1px solid #ccc;
border-radius: 5px;
width: 60%;
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
font-size: 14px;
transition: border-color 0.3s;

&:focus {
border-color: #007bff;
outline: none;
}
`;

const SaveButton = styled.button`
padding: 6px 12px;
background-color: #28a745;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 14px;
margin-left: 10px;

&:hover {
background-color: #218838;
}
`;

const TodoApp = () => {
const [task, setTask] = useState('');
const [tasks, setTasks] = useState([]);
const [editingTaskId, setEditingTaskId] = useState(null);
const [editingTaskText, setEditingTaskText] = useState('');

useEffect(() => {
const token = localStorage.getItem('token');
const storedTasks = localStorage.getItem(`tasks_${token}`);
if (storedTasks) {
setTasks(JSON.parse(storedTasks));
}
}, []);

const saveTasks = (tasks) => {
const token = localStorage.getItem('token');
setTasks(tasks);
localStorage.setItem(`tasks_${token}`, JSON.stringify(tasks));
};

const addTask = () => {
if (task) {
const newTask = { id: Date.now(), text: task };
const updatedTasks = [...tasks, newTask];
saveTasks(updatedTasks);
setTask('');
}
};

const deleteTask = (id) => {
if (window.confirm('Are you sure you want to delete this task?')) {
const updatedTasks = tasks.filter((task) => task.id !== id);
saveTasks(updatedTasks);
}
};

const editTask = (id, text) => {
setEditingTaskId(id);
setEditingTaskText(text);
};

const updateTask = (id) => {
const updatedTasks = tasks.map((task) =>
task.id === id ? { ...task, text: editingTaskText } : task
);
saveTasks(updatedTasks);
setEditingTaskId(null);
setEditingTaskText('');
};

return (
<Container>
<Title>Todo App</Title>
<Input
type="text"
value={task}
onChange={(e) => setTask(e.target.value)}
placeholder="Add a new task"
/>
<Button onClick={addTask}>Add Task</Button>
<TaskList>
{tasks.map((task) => (
<TaskItem key={task.id}>
{editingTaskId === task.id ? (
<>
<EditInput
type="text"
value={editingTaskText}
onChange={(e) => setEditingTaskText(e.target.value)}
/>
<SaveButton onClick={() => updateTask(task.id)}>Save</SaveButton>
</>
) : (
<>
{task.text}
<div>
<button onClick={() => editTask(task.id, task.text)}>Edit</button>
<button onClick={() => deleteTask(task.id)}>Delete</button>
</div>
</>
)}
</TaskItem>
))}
</TaskList>
</Container>
);
};

export default TodoApp;
