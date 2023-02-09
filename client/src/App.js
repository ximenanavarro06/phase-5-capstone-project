import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom"
import Login from "./components/account/Login"
import NavBar from "./NavBar"
import Header from "./Header"
import MyAccount from "./components/account/MyAccount"




function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
  }, []);

  if (!currentUser) return <Login onLogin={setCurrentUser} />;



  return(
    <>
    <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    {!currentUser ? <Login onLogin={setCurrentUser} history={history} /> :
    <Switch>
        <Route path="/me">
          <MyAccount currentUser={currentUser}/>
        </Route>

        <Route path="/">
          {console.log(currentUser)}
          <Login onLogin={setCurrentUser}  history={history}/>
        </Route>


        </Switch>}
    </>

  )
}

export default App






























// function App() {
//   const [currentUser, setCurrentUser] = useState(null);
//   const history = useHistory()
// ;
// useEffect(()=> {
//   fetch("/me").then((r) => {
//     if (r.ok) {
//       r.json().then((currentUser) => setCurrentUser(currentUser));
//     }
//   });
// }, []);

//   return (
//     <div className="app">
//       <NavBar />
//         <Header />

//         <Switch>

//           <Route exact path="/me">
//             <MyAccount

//             />
//           </Route>

//           <Route exact path="/login">
//             <LoginForm

//             />
//           </Route>

//           <Route exact path="/logout">

//           </Route>


//         </Switch>

//     </div>

//   );
// }

// export default App;
