import useQuery from "../api/useQuery"

import { Link } from "react-router"

const RoutinesList = () => {
  const {
    data: routines,
    loading,
    error,
  } = useQuery("/routines", "routines");

  if (loading || !routines) return <p>loading...</p>
  if (error) return <p>Sorry! {error}</p>

  return (
    <ul>
      {routines.map((routine) => (
        <RoutineListItem key={routine.id} routine={routine} />
      ))}
    </ul>
  );
}

function RoutineListItem({ routine }) {
  return (
    <li>
      <p>
        <Link to={"/routines/" + routine.id}>{routine.name}</Link>
      </p>
    </li>
  )
}


export default RoutinesList