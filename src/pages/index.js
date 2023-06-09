import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import TeamSection from '../sections/team-section'; 
import OurCustomer from 'sections/our-customer';
import Users from 'sections/users';
import Create from 'sections/create';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="BitHire | El mejor sitio para los talentos" />
        <Banner />
        <TeamSection />
        <OurCustomer />
        <Users />
        <Create />
        <Faq />
      </Layout>
    </ThemeProvider>
  );
}
