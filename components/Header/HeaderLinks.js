import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Button from "../CustomButtons/Button";
import styles from "../../styles/jss/nextjs-material-kit/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href="/login">
          <Box color="white" component="a">
            <Button
              color="transparent"
              className={classes.navLink + classes.marginRight5}
            >
              Login
            </Button>
          </Box>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/register">
          <Box color="white" component="a">
            <Button color="primary" className={classes.navLink}>
              {" "}
              Register
            </Button>
          </Box>
        </Link>
      </ListItem>
    </List>
  );
}
