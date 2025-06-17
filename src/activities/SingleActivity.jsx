import { Link, useParams } from "react-router"
import { ActivityList } from "./activities/ActivityList"
import useQuery from "../api/useQuery";
import { useAuth } from "../api/AuthContext"

export default function ActivityDetails() {
  const activity = useParams();
  const { data: activity} = useQuery(`/activities/${activities}`);
  const { token } = useAuth();

  if (loading) return <a>loading details</a>
  if (error) return <a>Sorry! {error}</a>
  if (!activity) return <a>no activity found</a>
return (
  <section id="activities">
    <h1>{activity.name}</h1>
    <a>Description: {activity.description}</a>
    <a>Created By: {activity.creatorName}</a>
  </section>
)

 
}
