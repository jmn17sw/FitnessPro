import { useNavigate, useParams } from "react-router"
import useMutation from "../api/useMutation"
import useQuery from "../api/useQuery";
import { useAuth } from "../api/AuthContext"

export default function ActivityDetails() {
  const { id } = useParams();
  const { token } = useAuth();
  const { 
      data: activity,
      loading,
      error,
   } = useQuery(`/activities/${id}`, "activity");
  

  if (loading) return <a>loading...</a>
  if (error || !activity) return <a>Sorry! {error}</a>

  return (
    
  <>
    <h1>{activity.name}</h1>
    <p>by {activity.creatorName}</p>
    <p>{activity.description}</p>
    {token && <DeleteButton id={activity.id} />}
  </>
); 
}

function DeleteButton({ id }) {
  const navigate = useNavigate();
  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", "/activities/" + id, ["activities", "activity"]);

  const onDeleteActivity = async () => {
    const success = await deleteActivity();
    if (success) navigate("/activities")
  };

  return (
    <button onClick={onDeleteActivity}>
      {loading ? "Deleting" : (error ?? "Delete")}
    </button>
  );
}
