import Head from "next/head";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MuiLink from "@material-ui/core/Link";
import Link from "../src/Link";
import dataPage from "../src/data-mock/page-label";
import data from "../src/data-mock/dashboard-label";

export default () => (
  <>
    <Head>
      <title>{`${data.appBar.titleStatic} | ${dataPage.loja.nome}`}</title>
    </Head>
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Customizações:
        </Typography>
        <Box my={1}>
          <Link href="custom/home" color="secondary">
            home{" "}
          </Link>
        </Box>
      </Box>
    </Container>
  </>
);
