import { Route, Routes } from "react-router-dom"
import Header from "./componenet/Header"
import Insert from "./componenet/Insert"
import Head from "./componenet/Head"
import View from "./componenet/View"
import Edit from "./componenet/Edit"
import Delete from "./componenet/Delete"

function App() {
  return (
    <>
   
    <Head/>


    <Routes>
      <Route path="/" element={ <Header/>}></Route>
      <Route path="/insert" element={ <Insert/>}></Route>
      <Route path="/view/:id" element={<View/>}></Route>
      <Route path="/edit/:id" element={<Edit/>}></Route>
      <Route path="/delete/:id" element={<Delete/>}></Route>
    </Routes>
     
    </>
  )
}

export default App
