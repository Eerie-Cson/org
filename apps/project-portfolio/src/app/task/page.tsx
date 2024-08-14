import TaskNavbar from '../components/task/TaskNavbar';

export default function Tasks() {
  return (
    <div>
      <TaskNavbar />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-gray-900">Task Management</h1>
      </main>
    </div>
  );
}
