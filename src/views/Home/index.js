import React from "react";

import { Container } from '@mui/material';

import HomeBanner from "./components/HomeBanner";

function Home() {
  return (
    <>
      <div style={{ padding: 0, border: 0 }}>
        <HomeBanner />
        <Container maxWidth="xl">
          <h1>Hellop</h1>
          <h1>Hellop</h1>
          <h1>Hellop</h1>
          <h1>Hellop</h1>
          <h1>Hellop</h1>
          <h1>Hellop</h1>
          <h1>Hellop</h1>
          <h1>Hellop</h1>
        </Container>
      </div>
    </>
  );
}

export default Home;
