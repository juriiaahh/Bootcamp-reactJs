import React from "react"
import "./styles.css"
import {
  useMutation,
  gql,
  useQuery,
} from '@apollo/client'

const GET_TASKS = gql`
  {
    tasks {
      id
      nama
      alamat
      no_hp
      pekerjaan
    }
  }
`

const ADD_TASK = gql`
  mutation addTask($nama: String!, $alamat: String!, $no_hp: String!, $pekerjaan: String!) {
    addTask(nama: $nama, alamat: $alamat, no_hp: $no_hp, pekerjaan: $pekerjaan){
      id
      nama
      alamat
      no_hp
      pekerjaan
    }
}
`;

const AddTask = () => {
  let nama, alamat, no_hp, pekerjaan;
  const [createTask] = useMutation(ADD_TASK);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          createTask({ variables: { nama: nama.value, alamat: alamat.value, no_hp: no_hp.value, pekerjaan:pekerjaan.value } });
        }}
        class="pure-form pure-form-aligned form"
      >
        <div className ="row justify-content-md-center">
          <div className="card col-md-4 p-3 mr-3">

          <div className="row">
            <div className="col p-2">
              <label>Nama</label>
            </div>
            <div className="col p-2"><input className="form-control col-md-10" ref = {node => {nama = node;}}/></div>
          </div>
          <div className="row">
            <div className="col p-2">
              <label>Alamat</label>
            </div>
            <div className="col p-2"><input className="form-control col-md-10" ref = {node => {alamat = node;}}/></div>
          </div>
          <div className="row">
            <div className="col p-2">
              <label>No Hp</label>
            </div>
            <div className="col p-2"><input className="form-control col-md-10" ref = {node => {no_hp = node;}}/></div>
          </div>
          <div className="row">
            <div className="col p-2">
              <label>Pekerjaan</label>
            </div>
            <div className="col p-2"><input className="form-control col-md-10" ref = {node => {pekerjaan = node;}}/></div>
          </div>
          <div>
            <button className="btn btn-primary col-md-4 p-2" type="submit">Add task</button>
          </div>
          </div>
        </div>
      </form>
    </div>
  );    
}

const Task = ({ tasks: { nama, alamat, no_hp, pekerjaan } }) => (
  <div className="row justify-content-md-center">
    <div className="col-4 col-sm-4 com-md-6">
      <div className="cardList">
          <div className="mt-2 p-2">
              <h3>{nama}</h3>
              <h6>{alamat}</h6> 
              <h6>{no_hp}</h6> 
              <h6>{pekerjaan}</h6> 
          </div>
      </div>
      </div>
  </div>
  )
  
  
  function App() {
    const { loading, error, data } = useQuery(GET_TASKS)
  
    if (error) return <h1>Something went wrong!</h1>
    if (loading) return <h1>Loading...</h1>
  
    return (
      <main className="App">
        <h1>Task Day-019</h1>
        <AddTask />
        {data.tasks.map(task => (
          <Task key={task.id} tasks={task} />
        ))}
      </main>
    )
  }

  
export default App;