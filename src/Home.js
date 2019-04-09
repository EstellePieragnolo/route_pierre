import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export default class Home extends React.Component {


    home = ({ data: { creas } }) => {

        if (creas) {
            return (
                creas.map(crea => {
                    return <p>{crea.name}</p>
                })

            )
        }
        return 'Loading posts...'
    }




    render() {
        const home = HomeComponent;
        return (
            <div>
                {this.home(home)}
            </div>
        )
    }

}

export const creas = gql`
query creas($first: Int, $skip: Int, $where: CreaWhereInput, $orderBy: CreaOrderByInput) {
    creas: creasConnection(first: $first, skip: $skip, where: $where, orderBy: $orderBy) {
      edges {
        node {
          id
          name
          picture {
            fileName
          }
          description {
            html
          }
        }
      }
    }
  }
  
`

export const HomeComponent = (
    graphql(creas, {
        props: ({ data }) => ({
            data
        })
    })
)(Home)