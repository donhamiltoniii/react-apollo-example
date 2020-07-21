import gql from 'graphql-tag';
import React from 'react';
import { Query, QueryResult } from 'react-apollo';

import './app.scss';

export default function App() {
  const QUERY = gql`
    {
      quoteOfTheDay
      random
      rollThreeDice
    }
  `;

  return (
    <div className="app">
      <Query query={QUERY}>
        {({ loading, error, data }: QueryResult<any, Record<string, any>>) => {
          if (loading) return <h1>Loading...</h1>;
          if (error) return <h1>Error: {error.message}</h1>;

          const { random, rollThreeDice, quoteOfTheDay } = data;

          return (
            <>
              <h1>QOTD: {quoteOfTheDay}</h1>
              <h2>Random Number: {random}</h2>
              <h3>
                Dice:{' '}
                {rollThreeDice.map((die: string, idx: number) =>
                  idx !== rollThreeDice.length - 1 ? (
                    <span>{die} - </span>
                  ) : (
                    <span>{die}</span>
                  ),
                )}
              </h3>
            </>
          );
        }}
      </Query>
    </div>
  );
}
