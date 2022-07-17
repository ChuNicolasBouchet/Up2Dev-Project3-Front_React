import React, { useState, useEffect } from "react";
// import TasksServices from "../../api/TasksServices";
// import { Link } from "react-router-dom";
import axiosPrivate from '../../api/httpClient';

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  // const [currentTask, setCurrentTask] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(-1);
  // const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveTasks();
  }, []);

  // const onChangeSearchTitle = e => {
  //   const searchTitle = e.target.value;
  //   setSearchTitle(searchTitle);
  // };

  const retrieveTasks = () => {
    // TasksServices.listUserTasks()
    return axiosPrivate.get('/usertasks')
      .then(response => {
        setTasks(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // const refreshList = () => {
  //   retrieveTasks();
  //   setCurrentTask(null);
  //   setCurrentIndex(-1);
  // };

  // const setActiveTask = (task, index) => {
  //   setCurrentTask(task);
  //   setCurrentIndex(index);
  // };

  // const removeAllTasks = () => {
  //   TasksServices.removeAll()
  //     .then(response => {
  //       console.log(response.data);
  //       refreshList();
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  // const findByTitle = () => {
  //   TasksServices.findByTitle(searchTitle)
  //     .then(response => {
  //       setTasks(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  return (
    <div className="list row">
{tasks}
    </div>
  );
};

export default TasksList;
