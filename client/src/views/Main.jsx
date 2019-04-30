import React from 'react';

import Footer from '../components/Footer/';
import Jumbotron from '../components/Jumbotron/';
import Navbar from '../components/Navbar';
import SkillCarousel from '../components/SkillCarousel/';

import skills from '../lib/skills'; // Skills repository

const Home = () => (
  <main className="main-page-layout">
    <Navbar />
    <Jumbotron />
    <SkillCarousel skills={skills} />
    <Footer />
  </main>
);

export default Home;