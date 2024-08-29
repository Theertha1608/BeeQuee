"use client";
import {
  Box,
  Button,
  Drawer,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

const AppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenuClick = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const menuItems = [
    { title: "Home", submenu: ["Option 1", "Option 2"] },
    { title: "your choose", submenu: ["Option 3", "Option 4"] },
    { title: "black squad", submenu: [] },
    { title: "red wiper", submenu: ["Option 5"] },
    { title: "new section", submenu: [] },
  ];
  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 1,
          paddingBottom: 1,
          backgroundColor: "white",
        }}
      >
        <Box sx={{ display: "flex", ml: { md: 10, xs: 0 } }}>
          {/* <Box
            sx={{
              width: { md: 80 },
              height: { md: 100 },
              display: { md: "flex", xs: "none" },
            }}
          >
            BEEQUEE
          </Box> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              ml: 2,
            }}
          >
            <Typography
              component="span"
              variant="body1"
              sx={{ color: "#075985", fontWeight: 750, fontSize: 18 }}
            >
              <span style={{ color: "yellow" }}>BEE</span>{" "}
              <span style={{ color: "black" }}>QUEE</span>
            </Typography>

            <Typography
              component="span"
              variant="body2"
              sx={{ fontWeight: 600 }}
            >
            Be THE QUEEN
            </Typography>
            <Typography
              component="span"
              variant="body2"
              sx={{ fontWeight: 600 }}
            >
            </Typography>
          </Box>
        </Box>
        {/* Drawer toggle for mobile */}
        <Box sx={{ display: { xs: "block", md: "none" }, mr: 2 }}>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            mr: 4,
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>Contacts</Typography>

          <Typography sx={{ fontWeight: 700 }}>about</Typography>
          <Typography sx={{ fontWeight: 700 }}>red carpet</Typography>
          <Typography sx={{ fontWeight: 700 }}>black squad</Typography>
          <Typography sx={{ fontWeight: 700 }}>Careers</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ fontWeight: 700 }}>favourate</Typography>
            <ExpandMoreIcon />
          </Box>
          <Box
            sx={{
              mt: 6,
              display: "flex",
              alignItems: "center",
              gap: 2,
              position: "absolute",
            }}
          >
            {/* <Button
              variant="contained"
              sx={{
                width: "220px",
                height: "50px",
                backgroundColor: "yellow",
                color: "black",
              }}
            >
              Have it{" "}
            </Button> */}
          </Box>
        </Box>

        {/* Sidebar Drawer */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <Box sx={{ width: 250, padding: 2 }}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                  ml: 2,
                }}
              ></Box>
            </Box>

            <IconButton
              onClick={toggleDrawer}
              sx={{
                position: "absolute",
                top: 8,
                right: 4,
                height: 25,
                width: 23,
                backgroundColor: "#f44336", // Red color background
                color: "#fff",
                "&:hover": {
                  backgroundColor: "yellow", // Darker red on hover
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <List>
                {menuItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem button onClick={() => handleSubmenuClick(index)}>
                      <ListItemText
                        primary={item.title}
                        primaryTypographyProps={{
                          fontWeight: "medium",
                          textAlign: "left",
                        }}
                      />
                      {item.submenu.length > 0 &&
                        (openSubmenu === index ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        ))}
                    </ListItem>
                    {item.submenu.length > 0 && (
                      <Collapse
                        in={openSubmenu === index}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {item.submenu.map((subItem, subIndex) => (
                            <ListItem
                              key={subIndex}
                              sx={{ pl: 3 }}
                              button
                              component={motion.div}
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: subIndex * 0.1,
                              }}
                            >
                              <ListItemText
                                primary={subItem}
                                primaryTypographyProps={{
                                  fontWeight: "light",
                                  textAlign: "left",
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </React.Fragment>
                ))}
              </List>
            </motion.div>
          </Box>
        </Drawer>
      </Box>
    </Grid>
  );
};

export default AppBar;
