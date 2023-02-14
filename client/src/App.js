import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom"
import Login from "./components/account/Login"
import NavBar from "./NavBar"
import Header from "./Header"
import MyAccount from "./components/account/MyAccount"
import WorkoutList from "./components/Workouts/WorkoutList";
import DietList from "./components/Diets/DietList"
import MovementHowToCard from "./components/WorkoutHowTos/MovementHowToCard";




function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const history = useHistory();
    const [workouts, setWorkouts] = useState([]);
    const [diets, setDiets] = useState([]);



  //fetch current user
    useEffect(() => {
      // auto-login
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((currentUser) => setCurrentUser(currentUser));
        }
      });
    }, []);

  //delete current user
    function handleDeleteCurrentUser(id) {
      const yourUser = currentUser.filter((user) => user.id !== id);
      setCurrentUser(yourUser);
    }

    //fetch workouts
    useEffect(() => {
      fetch("/workouts")
      .then((r) => r.json())
      .then(workouts => {
          setWorkouts(workouts)
      })
    }, [])

    //fetch diets
    useEffect(() => {
      fetch("/diets")
      .then((r) => r.json())
      .then(diets => {
          setDiets(diets)
      })
    }, [])

    //add workout to profile
    function handleAddWorkoutToProfile(addWorkoutToProfile) {
      const workoutOnProfile = workouts.map((workout) => {
        if (workout.id === addWorkoutToProfile.id) {
          return addWorkoutToProfile;
        } else {
          return workout;
        }
      })
        setWorkouts(workoutOnProfile);
    }

    //remove workout from profile
    function handleRemoveWorkoutFromProfile(removeWorkoutFromProfile) {
      const removeWorkout = workouts.filter((workout) => workout.id !== removeWorkoutFromProfile.id);
        setWorkouts(removeWorkout)
    }




    return(
      <>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      {!currentUser ? <Login onLogin={setCurrentUser} history={history} /> :
      <Switch>
          <Route path="/me">
            <MyAccount currentUser={currentUser} onCurrentUserDelete={handleDeleteCurrentUser} history={history} onAddWorkoutToProfile={handleAddWorkoutToProfile} onRemoveWorkoutFromProfile={handleRemoveWorkoutFromProfile} workouts={workouts}/>
          </Route>

          <Route path="/workouts">
            <WorkoutList currentUser={currentUser} workouts={workouts} onAddWorkoutToProfile={handleAddWorkoutToProfile} onRemoveWorkoutFromProfile={handleRemoveWorkoutFromProfile}/>
          </Route>

          <Route path="/movement_how_tos/:id">
            <MovementHowToCard />
          </Route>

          <Route path="/diets">
            <DietList currentUser={currentUser} diets={diets}/>
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
