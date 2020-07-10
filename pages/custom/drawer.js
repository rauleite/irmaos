import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import DesktopWindowsTwoToneIcon from "@material-ui/icons/DesktopWindowsTwoTone";
import TabletTwoToneIcon from "@material-ui/icons/TabletTwoTone";
import SmartphoneTwoToneIcon from "@material-ui/icons/SmartphoneTwoTone";
import Drawer from "../../components/custom/Drawer";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Drawer title="Edit Home">
        <Container maxWidth="lg">
          <Box my={1}>
            <Box>
              <DesktopWindowsTwoToneIcon />
            </Box>
            <Box>
              <TabletTwoToneIcon />
            </Box>
            <Box>
              <SmartphoneTwoToneIcon />
            </Box>
          </Box>
        </Container>
      </Drawer>
    </Container>
  );
};

export default Home;
