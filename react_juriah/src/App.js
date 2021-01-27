import React , { Component } from 'react';
import './App.css';


class App extends Component {
      constructor(){
          super();
          //ii.penerapan state didalam React minimal 4 state
          this.state = {
            categori: 'select',
            update: 'Online Course',
            date: new Date(),
            money: 0
          };
        }

        //i.1. JSX + literal dan akan di tampilkan adalah object
        categoryBuku = () =>{
          const elementJsx = (
            <ul>
              <li>Fiksi</li>
              <li>Biografi</li>
              <li>Novel</li>
              <li>Komik</li>
            </ul>
          )
          return 'kategori buku favorit saya :' + ' ' + elementJsx
        }

      //i.2. JSX pada fungsi menggunakan if statement
      writeMyHobby = (nama) => {
        let hobi = 'dengerin music';
            if(nama === "juu"){
              return <h4>JSX pada expression fungsi: Hobi saya adalah {hobi}</h4>
            }
          }

        //ii.action select untuk mengubah option/ mengubah nilai state
        handleChange(e){
          this.setState({
            categori: e.target.value
          })
        }

        //mengubah nilai state
        changeUpddate = () => {
          this.setState({
            update: "Online Course with Refactory"
          });
        }

        //mengubah nilai state gajian
        gajian = () => {
          this.setState({
            money: 20000
          })
        }

      render() {
        return (
          <div className="App">
            JSX + literal : {this.categoryBuku()} <br />
            {this.writeMyHobby("juu")} <br />

            <label>Silahkan pilih categori buku:</label><br />
            <select id="lang" onChange={this.handleChange.bind(this)} value={this.state.categori}>
              <option value="select">Select Categori Buku</option>
              <option value="Fiksi">Fiksi</option>
              <option value="Biografi">Biografi</option>
              <option value="Novel">Novel</option>
              <option value="Komik">Komik</option>
            </select>
            <h2>{this.state.categori}</h2>

            <h2>{this.state.update}</h2> 
            <button onClick={this.changeUpddate}>Update</button>

            <br />
            <h2>Time it is {this.state.date.toLocaleTimeString()}</h2>
          
            <br />
            <label>uang saya sisa : {this.state.money}</label> <br />
            <button onClick={this.gajian}>gajian</button>
          </div>
        );
    }
}
export default App;
