import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router—dom";
import { Footer } from "./components/Footer";
import { HeaderNav } from "./components/HeaderNav";

//Importacion componentes/paginas
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Maches } from "./pages/Maches";
import { Contact } from "./pages/Contact";

const App = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<HeaderNav></HeaderNav>}></Route>
               <Route index element={<Home></Home>}></Route>
               <Route path='list ' element={<List></List>}></Route>
               <Route path='maches ' element={<Maches></Maches>}></Route>
               <Route path='contact ' element={<Contact></Contact>}></Route>
               <Route path='*' element={<Navigate replace to='/'></Navigate>}></Route>
            </Routes>
         </BrowserRouter>
         <Footer></Footer>
      </>
   );
};

export default App;
