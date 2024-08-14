import React from 'react';
import { FiRepeat } from 'react-icons/fi';
import { Progress, Task } from '../../types/tasks';

const TaskCard = ({ task, onClick }: { task: Task; onClick: () => void }) => {
  return (
    <div
      className="relative bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <h3
          className={`text-1xl font-semibold  ${
            task.progress === Progress.Done
              ? 'text-teal-700 line-through'
              : 'text-indigo-800'
          }`}
        >
          {task.name}
        </h3>
      </div>
      <div className="absolute top-0 right-0 p-2">
        {task.isRecurring ? (
          <FiRepeat size={20} className="text-blue-500" />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
