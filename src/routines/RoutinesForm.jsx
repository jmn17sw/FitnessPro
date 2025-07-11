import useMutation from "../api/useMutation";

const RoutineForm = () => {
const {
  mutate: add,
  loading,
  error,
} = useMutation("POST", "/routines", ["routines"]);

const addRoutine = (formData) => {
  const name = formData.get("name");
  const goal = formData.get("goal");
  add({ name, goal });
};

return (
  <>
    <h2>Add a new Routine</h2>
    <form action={addRoutine}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Goal
          <input type="text" name="goal" />
      </label>
      <button>{loading ? "Adding..." : "Add activity"}</button>
      {error && <output>{error}</output>}
    </form>
  </>
)

}

export default RoutineForm
