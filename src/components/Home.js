import React, { useState, useRef, useEffect ,useContext } from "react";
import FilterButton from "./FilterButton.js";
import Todo from "./Todo.js";
import Form from "./Form.js";
import { nanoid } from "nanoid";
import ClearAll from "./ClearAll.js";
import ToggleSwitch from "./ToggleSwitch.js";
import { ThemeContext } from "./ThemeProvider.js";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const listHeadingRef = useRef(null);
  const [isDark,setDark] = useContext(ThemeContext)

  useEffect(()=>{
    const data =localStorage.getItem('listOfTasks');
    if(data){
      setTasks(JSON.parse(data))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('listOfTasks',JSON.stringify(tasks))
    localStorage.setItem('DarkTheme',JSON.stringify(isDark))
  })

  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    // console.log(updatedTasks)
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function MarkImportant(id)
  {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
      
        return { ...task, important:!task.important };
      }
      return task;
    });
    setTasks(updatedTasks);
    // console.log(updatedTasks)
    

  }

  // mapping Todo and take attributes form Data
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        isImportant={task.important}
        MarkImportant={MarkImportant}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false ,important:false};
    setTasks([...tasks, newTask]);
  }

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  const prevTaskLength = usePrevious(tasks.length);
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  const GetDarkTheme = (e)=>{

    setDark(!isDark)

  }

  return (
    <div className={isDark ? "darkTodoapp stack-large":"todoapp stack-large"}>
      <ToggleSwitch GetDarkTheme={GetDarkTheme}/>
      <h1>TodoMatic</h1>
      <Form addTask={addTask} isDark = {isDark}/>
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
      <div className="filters btn-group stack-exception"><ClearAll  setTasks={setTasks}/></div>
      
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default Home;
