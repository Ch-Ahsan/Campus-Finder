import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import React from "react";
import axios from "axios";
import Footer from "../../GlobalComponent/Footer";
import Heading from "../components/Heading";
import AdminNavbar from "../components/navbar";
import BadgeIcon from "@mui/icons-material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LinkIcon from "@mui/icons-material/Link";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useNavigate } from "react-router-dom";
const AddEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = React.useState({
   
  });
  const [image, setImage] = React.useState();
  console.log(events);

  const postData = () => {
    if (
      !events?.name ||
      !events?.organizer ||
      !events?.description ||
      !events?.link ||
      !events?.startDate ||
      !events?.endDate ||
      !events?.address ||
      !events?.logo
    ) {
      window.alert("fill all feilds");
    } else {
      const formData = new FormData();
      formData.append("name", events?.name);
      formData.append("organizer", events?.organizer);
      formData.append("description", events?.description);
      formData.append("link", events?.link);
      formData.append("startDate", events?.startDate);
      formData.append("endDate", events?.endDate);
      formData.append("address", events?.address);
      formData.append("logo", events?.logo);
      axios.post("/addEvents", formData).then((res) => {
        console.log(res);
        window.alert("Events has been added");
      
      });
      navigate("/viewEvents");
    }
  };
  return (
    <Grid container>
      <Grid item width="100%">
        <AdminNavbar />
      </Grid>
      <Grid
        container
        item
        direction="column"
        justifyContent={"center"}
        alignItems="center"
      >
        <Grid item>
          <Heading text="Add Events" />
        </Grid>
        <Paper>
          <Grid item style={{ width: "800px", padding: "15px" }}>
            <TextField
              variant="outlined"
              size="small"
              type="text"
              fullWidth
              placeholder="Name"
              style={{ marginBottom: "20px" }}
              value={events?.name}
              onChange={(e) => {
                setEvents({
                  ...events,
                  name: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <BadgeIcon style={{ color: "#eb2872" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              size="small"
              type="text"
              fullWidth
              placeholder="Organizer"
              style={{ marginBottom: "20px" }}
              value={events?.organizer}
              onChange={(e) => {
                setEvents({
                  ...events,
                  organizer: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <PersonIcon style={{ color: "#eb2872" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              size="small"
              type="text"
              fullWidth
              placeholder="Description"
              style={{ marginBottom: "20px" }}
              value={events?.description}
              onChange={(e) => {
                setEvents({
                  ...events,
                  description: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <DescriptionIcon style={{ color: "#eb2872" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              size="small"
              type="text"
              fullWidth
              style={{ marginBottom: "20px" }}
              placeholder="Link"
              value={events?.link}
              onChange={(e) => {
                setEvents({
                  ...events,
                  link: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <LinkIcon style={{ color: "#eb2872" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              size="small"
              type="datetime-local"
              style={{ marginBottom: "20px" }}
              fullWidth
              placeholder="Start Date"
              value={events?.startDate}
              onChange={(e) => {
                setEvents({
                  ...events,
                  startDate: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <CalendarMonthIcon style={{ color: "#eb2872" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              size="small"
              type="datetime-local"
              fullWidth
              style={{ marginBottom: "20px" }}
              placeholder="End Date"
              value={events?.endDate}
              onChange={(e) => {
                setEvents({
                  ...events,
                  endDate: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <CalendarMonthIcon style={{ color: "#eb2872" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              size="small"
              type="text"
              fullWidth
              placeholder="Location"
              style={{ marginBottom: "20px" }}
              value={events?.address}
              onChange={(e) => {
                setEvents({
                  ...events,
                  address: e.target.value,
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <AddLocationIcon style={{ color: "#eb2872" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              size="small"
              type="file"
              name="logo"
              fullWidth
              style={{ marginBottom: "20px" }}
              onChange={(e) => {
                setEvents({
                  ...events,
                  logo: e.target.files[0],
                });
                setImage(URL.createObjectURL(e.target.files[0]));
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <AddAPhotoIcon style={{ color: "#eb2872" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {image && <img src={image} width="300px" height="300px" />}
            <br /> <br />
            <Button
              variant="contained"
              onClick={postData}
              style={{
                backgroundColor: "#eb2872",
                color: "white",
                marginLeft: "10px",
              }}
            >
              Add
            </Button>
          </Grid>
        </Paper>
      </Grid>
      <Grid item width="100%">
        <Footer />
      </Grid>
    </Grid>
  );
};

export default AddEvents;
