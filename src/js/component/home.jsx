import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [task, setTask] = useState([])
	const [inputValue, setInputValue] = useState("")
	const [actButon, setActButon] = useState(false)

	function deleteTask(id){
		setTask(task.filter((task,index) => {
			return index !== id;
		}))
	}
	return (
		<>
		<h1>todos</h1>
		<div className="todolist">
			<form onSubmit={(e) => {
				e.preventDefault()
				setTask([...task,inputValue])
				setInputValue ("")
			}}
			action="" method="get">
				<div>
					<input type="text" className="form-control border-0" placeholder="  What needs to be done?" onChange={e => setInputValue(e.target.value)} value={inputValue} />
				</div>
			</form>
			<ul>
				{task.map((task, i) => {
					return <dd key={i} onMouseOver={() => setActButon(true)} onMouseOut={() => setActButon(false)}> {task} <a className={actButon ? "" : "disable"} onClick={() => {deleteTask(i)}}>X</a></dd>
				})}
			</ul>
			<p>{task.length === 0 ? "No tasks, add a task" : task.length + " item left"}</p>
		</div>
		</>
	);
};

export default Home;
