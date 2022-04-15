import "./App.css";
import Sidebar from "./components/Sidebar";
import Image from "./components/Image";
import { Container, Grid } from "@mui/material";
import { colors } from "./styles";
import { Header } from "./components/Header";
import { DataGrid } from "./components/DataGrid";

const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png";

function App() {
  return (
    <div className="App">
      <Container
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          maxWidth: "100vw!important",
          padding: "0!important",
          background: "yellow",
        }}
      >
        <Sidebar />
        <Grid container>
          <Header />

          <DataGrid />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
