import { useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMediaQuery, Box, CssBaseline, Drawer } from "@mui/material";
import { cookieService } from "./../Service/CookieService";
import LeftDrawer from "./LeftDrawer";
import RightDrawer from "./RightDrawer";

const drawerWidth = 300;

const Disposition = (props) => {
  //darkMode handling
  const [darkMode, setDarkMode] = useState(
    cookieService.getCookie("darkMode") || "light"
  );

  const setMode = (mode) => {
    cookieService.setCookie("darkMode", mode);
    setDarkMode(mode);
  };

  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${darkMode})`);

  const toogleDarkMode = () => {
    darkMode === "light" ? setMode("dark") : setMode("light");
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  //end darkMode handling

  const drawer = <LeftDrawer setTheme={toogleDarkMode} theme={darkMode} />;

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const bgColor = darkMode === "light" ? "#f0f0f0" : null;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            backgroundColor: bgColor,
          }}
        >
          <RightDrawer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Disposition;
