import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskView from './View/taskView';
import TaskController from './Controller/taskController';

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
     <TaskController/>
</div>
  );
}

export default App;
