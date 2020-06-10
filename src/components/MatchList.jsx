import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import { GET_LIVE_MATCHES } from "../graphql/queries";
import { useSubscription } from "@apollo/react-hooks";
import ErrorIcon from "@material-ui/icons/Error";
import MatchListCard from './MatchListCard'
import "./MatchList.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2em",
  },
}));

function MatchList() {
  const classes = useStyles();
  const { loading, error, data } = useSubscription(GET_LIVE_MATCHES);

  if (loading) return "Loading...";
  if (error)
    return (
      <p>
        <ErrorIcon fontSize="large" />
        Error! ${error.message}
      </p>
    );

  

  

  return (
    
      <Container className={classes.root}>
        <Typography variant="h2">Matches to come:</Typography>
        <Box>
          <div className="column2">
            {data.matches
              .filter((match) => !match.finished)
              .map((match) => {return <MatchListCard {...match} />})}
          </div>
        </Box>
        <Typography variant="h2">All Finished Matches</Typography>
        <Box>
          <div className="column1">
            {data.matches
            .filter((match) => match.finished)
              .map((match) => {return <MatchListCard {...match} />})}
          </div>
        </Box>
      </Container>
    
  );
}

export default MatchList;
