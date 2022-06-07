import classes from "./TaskItem.module.scss";

const TaskItem = (props) => {
  return <li className={classes.task}>{props.children}</li>;
};

export default TaskItem;
