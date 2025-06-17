import { useAuth } from "../auth/AuthContext";
import RoutinesList from "../routines/RoutinesList";
import RoutinesFrom from "../routines/RoutinesForm";

const RoutinesPage = () => {
  const { token } = useAuth()
  return (
    <>
      <h1>Routines</h1>
      <RoutinesList />
      {token && <RoutinesFrom />}
    </>
  );
}



export default RoutinesPage