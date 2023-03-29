import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  enableEditing,
  markTaskDone,
  updateTask,
} from "../features/Task";
import { TbBallpen, TbBallpenOff, TbPencilOff, TbPencil } from "react-icons/tb";
const TaskCard = ({ taskIndex, task }) => {
  const dispatch = useDispatch();
  const handleDelete = (selectedTask) => dispatch(deleteTask(selectedTask));

  const handleMarkTaskDone = (selectedTaskId) =>
    dispatch(markTaskDone(selectedTaskId));
  const handleEnableEditing = (taskId) => dispatch(enableEditing(taskId));
  const handleChangeTask = (e, taskId) => {
    const newValue = e.target.value;
    if (!newValue.trim()) return;
    dispatch(updateTask({ taskId: taskId, newValue: newValue }));
  };
  return (
    <div className="flex gap-6 justify-between flex-wrap sm:flex-nowrap border-b border-gray-200 py-2">
      <div className="flex gap-3">
        {!task.isEditing && (
          <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
            <input
              type="checkbox"
              id={`checkbox${+1} ${taskIndex}`}
              value=""
              checked={task.checked ? true : false}
              onChange={() => handleMarkTaskDone(task.id)}
              aria-label="..."
            />
            <label className="sr-only" htmlFor={`checkbox${taskIndex + 1}`}>
              {task.value}
            </label>
          </div>
        )}
        <div className="gap-2 flex-1">
          {task.isEditing ? (
            <div className="flex w-full flex-1">
              <label htmlFor="task" className="sr-only">
                task
              </label>
              <input
                type="text"
                id="task"
                placeholder="Edit your task"
                className="outline-none focus:outline-none break-words w-11/12"
                defaultValue={task.value}
                onBlur={(e) => handleChangeTask(e, task.id)}
              />
            </div>
          ) : (
            <p
              className={`text-lg break-words w-full ${
                task.checked ? "line-through" : ""
              }`}
            >
              {task.value}
            </p>
          )}
        </div>
      </div>
      <button
        className="p-3 bg-teal-500  rounded-full h-fit "
        onClick={() => handleEnableEditing(task.id)}
      >
        {task.isEditing ? (
          <div className="flex gap-1 items-center">
            <p className="text-yellow-900 text-xs">Cancel</p>
            <TbBallpenOff className="text-yellow-900 text-xs" />
          </div>
        ) : (
          <div className="flex gap-1 items-center ">
            <p className="text-white  text-xs">Edit</p>
            <TbBallpen className="text-white text-xs" />
          </div>
        )}
      </button>
      <button
        className="p-3 bg-gray-100 rounded-full h-fit "
        onClick={() => handleDelete(task)}
      >
        <FaTrash className="text-red-600" />
      </button>
    </div>
  );
};

export default TaskCard;
