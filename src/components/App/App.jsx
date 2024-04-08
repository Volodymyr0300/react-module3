// import ElementSelect from "./ElementSelect/ElementSelect";
// import LoginForm from "./LoginForm/LoginForm";
// import MyComponent from "./MyComponent/MyComponent";
// import SearchBar from "./SearchBar/SearchBar";
// import RadioButtons from "./RadioButtons/RadioButtons";
// import CheckBox from "./CheckBox/CheckBox";
// import NewLoginForm from "./NewLoginForm/NewLoginForm.jsx";

import TaskList from "./Tasks/TaskList/TaskList";
import initialTasks from "./Tasks/tasks.json";
import Form from "./Tasks/Form/Form";
import Filter from "./Tasks/Filter/Filter";
import { useState } from "react";

// import { useState } from "react";

const App = () => {
  //   const handleLogin = (userData) => {
  //     console.log(userData);
  //   };

  //   const [lang, setLang] = useState("uk");

  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {/* <h1>Please login to your account!</h1>
      <LoginForm onLogin={handleLogin} /> */}
      {/* <MyComponent /> */}
      {/* <SearchBar /> */}
      {/* <p>Selected language: {lang}</p>
      <ElementSelect value={lang} onSelect={setLang} />
      <RadioButtons /> */}
      {/* <CheckBox /> */}
      {/* <NewLoginForm /> */}
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;
