import React from 'react';
import { FiX } from 'react-icons/fi';
import { Progress, tasks } from '../../data/tasks';

const TaskModal = ({
  task,
  onClose,
}: {
  task: (typeof tasks)[0];
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        {/* Modal Header */}
        <div className="border-b border-gray-200 mb-4 pb-4">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-bold text-gray-900">{task.name}</h3>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900"
            >
              <FiX size={24} />
            </button>
          </div>
        </div>
        {/* Modal Body */}
        <div>
          <p className="text-gray-700 mb-4">{task.details}</p>
          <div className="mt-4">
            <p
              className={`inline-block px-3 py-1 text-sm font-medium border rounded-full ${
                task.progress === Progress.Done
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              Status: {task.progress === Progress.Done ? 'Done' : 'Not Done'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
