import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import FileBase from "react-file-base64";
import { useLocation } from "react-router-dom";

export function EditRecipe() {
  const { state } = useLocation();
  const navigate = useNavigate();
  var { register, handleSubmit, setValue } = useForm({
    defaultValues: state,
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:5001/api/update", data).then((response) => {
      navigate("/");
    });
  };

  return (
    <div className="form">
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="standard-basic"
          variant="standard"
          label="Name"
          name="name"
          {...register("name", {
            required: "Required",
          })}
        />
        <br />
        <TextField
          id="standard-basic"
          variant="standard"
          label="Duration"
          name="duration"
          {...register("duration", {
            required: "Required",
          })}
        />
        <br />
        <TextField
          id="standard-basic"
          variant="standard"
          label="# of servings"
          name="noOfServings"
          {...register("noOfServings", {
            required: "Required",
          })}
        />
        <br></br>
        <br></br>
        <select {...register("cuisine")} placeholder="Cuisine">
          <option value={""}>Select</option>
          <option value={1}>Indian</option>
          <option value={2}>Chinese</option>
        </select>
        <br></br>
        <br></br>
        <FileBase
          {...register("image", {
            required: "Required",
          })}
          type="file"
          multiple={false}
          onDone={({ base64 }) => {
            setValue("image", base64);
          }}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Edit Recipe
        </Button>
      </form>
    </div>
  );
}
