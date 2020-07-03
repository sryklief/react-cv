import React from 'react';
import styled from 'styled-components';
import './Home.css';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Home = (props) => (
  <GridWrapper>
   <h1>This is going to be my landing</h1>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
< div class="wrapper">
  <a href="http://www.google.com"><i class="fa fa-3x fa-google-plus"></i></a>
  <a href="http://www.facebook.com"><i class="fa fa-3x fa-facebook-square"></i></a>
  <a href="http://www.twitter.com"><i class="fa fa-3x fa-twitter-square"></i></a>
</div>
  </GridWrapper>
)