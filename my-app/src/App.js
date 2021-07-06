import Todo from './components/Todo';



function App() {
  return (
     <div>
       <h1>MY TODOs</h1>
       <div className="items">
        <Todo text="Learn React"/>
        <Todo text="Master React"/>
        <Todo text="Complete React Course"/>
        <Todo text="Learn React"/>
       </div>
     </div>
  );
}

export default App;
