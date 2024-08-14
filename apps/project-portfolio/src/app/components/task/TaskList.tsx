import React, { useState } from 'react';
import TaskCard from './TaskCard';
import { tasks } from '../../data/tasks';
import { Task } from '../../types/tasks';
import TaskModal from './TaskModal';

const TaskList = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleCardClick = (task: Task) => {
    setSelectedTask(task);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
  };

  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-200 via-blue-300 to-indigo-200">
      {/* Static Background */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-500 opacity-30 rounded-full filter blur-xl"></div>
      </div> */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 opacity-40 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 opacity-40 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <section
        id="tasks"
        className="relative max-w-7xl mx-auto rounded-lg shadow-lg bg-white p-8 border border-gray-200"
      >
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-600 mb-4 text-center">
          My Current Habits
        </h2>
        <div className="border-t border-gray-300 my-6"></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tasks.length > 0 ? (
            tasks.map((task: Task) => (
              <TaskCard
                key={task.name}
                task={task}
                onClick={() => handleCardClick(task)}
              />
            ))
          ) : (
            <p className="text-indigo-800">No tasks found.</p>
          )}
        </div>
        {selectedTask && (
          <TaskModal task={selectedTask} onClose={handleCloseModal} />
        )}
      </section>
    </div>
  );
};

export default TaskList;
