import React from 'react'

export default function MatchListCard(props) {
    return (
        
        <div className="App">
          <article key={props.id}>
            <p>Match Id: {props.id}</p>
            <p>Started At: {props.started_at.slice(0, 10)}</p>
            <p>
              player 1: {props.p1.name} score:{" "}
              {props.setts.map((s) => s.p1_score)}
            </p>
            <p>
              player 2: {props.p2.name} score:{" "}
              {props.setts.map((s) => s.p2_score)}
            </p>

            <hr />
          </article>
        </div>
      );
        
}
