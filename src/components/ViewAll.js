import IconButton from "@mui/material/IconButton";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

export function ViewAll() {
  const navigate = useNavigate();

  // Recipes array
  var [recipes, setRecipes] = useState([]);
  let { id } = useParams();

  // // UseEffect hook to get all movies
  useEffect(() => {
    getRecipes();
  }, []);

  // Call to get all recipe details
  const getRecipes = async () => {
    var url = "http://localhost:5001/api";
    if (id !== undefined) {
      url += "/" + id;
    }
    await axios.get(url).then((response) => {
      setRecipes((recipes = response.data));
    });
  };

  // Delete a recipe
  const deleteRecipeDetail = (id) => {
    axios
      .post("http://localhost:5001/api/delete", { _id: id })
      .then((response) => {
        getRecipes();
      });
  };

  // Open Edit window
  const editRecipeDetail = (row) => {
    navigate("/edit", {
      state: row,
    });
  };

  return (
    <div className="App">
      <div className="recipe-area center">
        {recipes.map((row, index) => (
          <div className="recipe" key={index}>
            <img className="recipe-img" src={row.image} alt=""></img>
            <br />
            <span>{row.name}</span>
            <br />
            <IconButton edge="end" aria-label="duration" disabled>
              <AccessTimeIcon />
            </IconButton>
            &nbsp;{row.duration} &nbsp;&nbsp;
            <IconButton edge="end" aria-label="servings" disabled>
              <PeopleAltIcon />
            </IconButton>
            &nbsp;{row.noOfServings}
            <div className="recipe-actions">
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => editRecipeDetail(row)}
              >
                <EditIcon />
              </IconButton>
              &nbsp;
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteRecipeDetail(row._id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
