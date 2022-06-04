import { Typography, Stack } from "@mui/material";

const ShowData = ({ label, data, secondLabel, secondData }) => {
  return (
    <Stack direction="row" gap={1}>
      <Typography color="text.secondary" gutterBottom>
        {label + ":"}
      </Typography>
      {<Typography gutterBottom>{data}</Typography>}
      {secondLabel ? (
        <Typography color="text.secondary" gutterBottom>
          {secondLabel + ":"}
        </Typography>
      ) : null}
      {secondData ? <Typography gutterBottom>{secondData}</Typography> : null}
    </Stack>
  );
};

export default ShowData;
