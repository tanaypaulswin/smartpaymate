import * as React from 'react';
import styled from 'styled-components';

import "./app.scss";

const StyledApp = styled('div')`
  background: #f9fbfb;
  height: 100vh;
  padding: 20%;
`;

const App = () => {
  return (
    <StyledApp>
      <h1>SmartPayMate - A new way to handle your bills and payments.</h1>
      <div className="copyrightLabel">
          © PSS Ltd. {new Date().getFullYear()}&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
    </StyledApp>
  );
};

export default App;
