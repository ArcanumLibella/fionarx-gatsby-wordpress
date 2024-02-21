import React from 'react';
import { Hero } from "../components/organisms/Hero";

const HomePage = () => {
  return (
      <Hero />
  );
};

export default HomePage;

export const Head = () => (
  <>
    <title>Fiona Rx</title>
    <meta description="Page d'accueil du portfolio de Fiona Roux"></meta>
  </>
);