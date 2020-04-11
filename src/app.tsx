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
      <h1>SmartPayMate - Your Bill Handler</h1>
    </StyledApp>
  );
};

export default App;
