import React from 'react'
import axios from 'axios'
import Post from './components/Post';
import "./App.css";



const App = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    axios.get("https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc&page=1&per_page=12")
      .then((res) => {
        setData(res.data.items);
      })
      .catch((err) => {
        alert("Error check console");
        console.log(err)
      })
  }, [])
  return (
    <>


      {
        data &&
        data.map((single) => {
          return <Post single={single} />
        })
      }
    </>
  )

}

export default App;