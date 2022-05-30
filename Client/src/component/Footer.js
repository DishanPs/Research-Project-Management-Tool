import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Box
        style={{ padding: "0px" }}
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.primary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Box>
                <div
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    marginTop: "20px",
                  }}
                >
                  Research Project Management Tool
                </div>
              </Box>
              <Box style={{ marginTop: "5px" }}>
                <Link href="/" color="primary">
                  Home
                </Link>
              </Box>
              <Box>
                <Link href="/about" color="primary">
                  About
                </Link>
              </Box>
              <Box>
                <Link href="https://www.sliit.lk/contact-us/" color="primary">
                  Contact Us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={10} sm={4}>
              <Box
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginLeft: "120px",
                }}
              >
                Share & Follow us On
              </Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "15px",
                }}
              >
                <Box>
                  <AiOutlineFacebook size={30} color={"#4267B2"} />
                </Box>
                <Box>
                  <AiOutlineTwitter size={30} color={"#1DA1F2"} />
                </Box>
                <Box>
                  <AiOutlineInstagram size={30} color={"#E1306C"} />
                </Box>
                <Box>
                  <AiOutlineYoutube size={30} color={"#FF0000"} />
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginLeft: "140px",
                }}
              >
                Contact Us On
              </Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "15px",
                }}
              >
                <Box>
                  <AiFillPhone size={30} color={"#4267B2"} />
                </Box>
                <Box>
                  <ImLocation size={30} color={"#1DA1F2"} />
                </Box>
                <Box>
                  <FaWhatsappSquare size={30} color={"#25D366"} />
                </Box>
                <Box>
                  <MdEmail size={30} color={"#FF0000"} />
                </Box>
              </div>
            </Grid>
          </Grid>
          <Box
            style={{ color: "gray" }}
            textAlign="center"
            pt={{ xs: 5, sm: 1 }}
            pb={{ xs: 5, sm: 0 }}
          >
            Copyright &reg; DCRC {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
