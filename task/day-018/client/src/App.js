import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import "./styles.css"

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

const Task = ({ tasks: { nama, alamat, no_hp, pekerjaan } }) => (
  <div className="row justify-content-md-center">
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body"> 
      <div className="table-responsive-sm">
          <h4 styles={{fontWeight:"bold"}}>Data Client</h4>
          <table className="table">
            <tr>
              <td>Nama</td>
              <td>{nama}</td>
            </tr>
            <tr>
              <td>Alamat</td>
              <td>{alamat}</td>
            </tr>
            <tr>
              <td>No. Hp</td>
              <td>{no_hp}</td>
            </tr>
            <tr>
              <td>Pekerjaan</td>
              <td>{pekerjaan}</td>
            </tr>
          </table>
        </div>  
      </div>
    </div>
    <br/>
  </div>
</div>
)


function App() {
  const { loading, error, data } = useQuery(GET_TASKS)

  if (error) return <h1>Something went wrong!</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <main className="App">
      <h1>Task Day-018</h1>
      {data.tasks.map(task => (
        <Task key={task.id} tasks={task} />
      ))}
    </main>
  )
}

export default App