import { Fragment, useState } from "react";
import { Typography, Button } from "@mui/material";

const TrainingDescription = ({ data }) => {
  const [isShowDesc, setIsShowDesc] = useState(false);

  return (
    <Fragment>
      <Typography
        sx={{ display: "inline" }}
        component="span"
        variant="body2"
        color="text.primary"
      >
        {data.date.start + " — " + data.date.end} <br />
      </Typography>
      {data.content.certificate !== "Aucun" ? data.content.certificate : " — "}{" "}
      <br />
      {data.content.trainer.name}
      <br />
      <Button
        variant="text"
        onClick={() => {
          setIsShowDesc(!isShowDesc);
        }}
      >
        {"Voir " + (isShowDesc ? "moins" : "plus")}
      </Button>
      <br />
      {isShowDesc ? (
        <Typography component="span" color="text.primary">
          {data.content.description}
        </Typography>
      ) : null}
    </Fragment>
  );
};

export default TrainingDescription;
