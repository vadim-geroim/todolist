import { FilterType } from "./App";

type PropsTask = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<PropsTask>;
  removeTask: (id: number) => void;
  changeFilter: (option: FilterType) => void;
};

function TodoList(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.tasks.map((t) => {
          return (
            <li style={{ margin: "10px auto" }} key={t.id}>
              <input type="checkbox" checked={t.isDone} />{" "}
              <span>{t.title}</span>
              <button
                onClick={() => props.removeTask(t.id)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => props.changeFilter("all")}>All</button>
        <button onClick={() => props.changeFilter("active")}>Active</button>
        <button onClick={() => props.changeFilter("completed")}>
          Completed
        </button>
      </div>
    </div>
  );
}

export default TodoList;
