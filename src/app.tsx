import * as React from 'react';
import styled from 'styled-components';

const StyledApp = styled('div')`
  background: #f9fbfb;
  height: 100vh;
  padding: 20%;
`;

const App = () => {
  return (
    <StyledApp>
      <h1>SmartPayMate - A new way to handle your bills and payments.</h1>
    </StyledApp>
  );
};

export default App;
