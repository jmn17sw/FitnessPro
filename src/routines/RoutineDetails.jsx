import { useNavigate, useParams } from "react-router";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";


import SetForm from "./sets/SetForm";
import SetList from "./sets/SetList";

const RoutineDetails = () => {
  const { token } = useAuth();
  const { id } = useParams();
  const {
    data: routine,
    loading,
    error,
  } = useQuery("/routines" + id, "routine");

  if (loading) return <p>Loading...</p>
  if (error || !routine) return <p>Error! {error}</p>;

  return (
    <>
      <h1>{routine.name}</h1>
      <p>by {routine.creatorName}</p>
      <p>{routine.goal}</p>
      {token && <DeleteButton id={routine.id} />}
      <SetList sets={routine.sets} />
      {token && <SetForm routineId={id} />}
    </>
  );
}

function DeleteButton ({ id }) {
  const navigate = useNavigate();
  const {
    mutate: deleteRoutine,
    loading,
    error,
  } = useMutation("DELETE", "/routines/" + id ["routines", "routine"]);

  const onDeleteRoutine = async () => {
    const success = await deleteRoutine();
    if (success) navigate("/routines");
  };

  return (
    <button onClick={onDeleteRoutine}>
      {loading ? "Deleting" :(error ?? "Delete routine")}
    </button>
  );
}

export default RoutineDetails