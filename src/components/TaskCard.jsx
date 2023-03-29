import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTodo, markTodoDone } from "../features/todo";

const TaskCard = ({ taskIndex, task }) => {
  const dispatch = useDispatch();
  const deleteTask = (selectedTask) => {
    dispatch(deleteTodo(selectedTask));
  };
  const markTaskDone = (selectedTaskId) => {
    dispatch(markTodoDone(selectedTaskId));
  };

  return (
    <div className="flex gap-6 justify-between flex-wrap sm:flex-nowrap border-b border-gray-200 py-2">
      <div className="flex gap-3">
        <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
          <input
            type="checkbox"
            id={`checkbox${+1} ${taskIndex}`}
            value=""
            checked={task.checked ? true : false}
            onChange={() => markTaskDone(task.id)}
            aria-label="..."
          />
          <label className="sr-only" htmlFor={`checkbox${taskIndex + 1}`}>
            {task.value}
          </label>
        </div>
        <p className={`text-lg ${task.checked ? "line-through" : ""}`}>
          {task.value}
        </p>
      </div>
      <button
        className="p-3 bg-gray-100 rounded-full h-fit "
        onClick={() => deleteTask(task)}
      >
        <FaTrash className="text-red-600" />
      </button>
    </div>
  );
};

export default TaskCard;
