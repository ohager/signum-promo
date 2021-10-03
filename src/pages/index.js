import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import ResetCSS from 'common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/SaasModern/sassModern.style';

import BannerSection from 'containers/SaasModern/Banner';
import Navbar from 'containers/SaasModern/Navbar';
import WorkingProcessSection from 'containers/SaasModern/WorkingProcess';
import PricingSection from 'containers/SaasModern/Pricing';
import PartnerSection from 'containers/SaasModern/Partner';
import FaqSection from 'containers/SaasModern/Faq';
import TrialSection from 'containers/SaasModern/Trial';
import InfoSection from 'containers/SaasModern/Info';
import FeatureSection from 'containers/SaasModern/Feature';
import UpdateScreen from 'containers/SaasModern/UpdateScreen';
import TestimonialSection from 'containers/SaasModern/Testimonial';
import Footer from 'containers/SaasModern/Footer';
import ThumbnailUrl from 'common/assets/image/signum-promo.jpg'

const SaasModern = () => {
  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Head>
          <title>Signum Dev Meetup Promo</title>
          <meta name="title" content="Signum Dev Meetup Promo"/>
          <meta name="description" content="Checkout our upcoming Dev Meetup on Discord"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://signum-promo.vercel.app"/>
          <meta property="og:title" content="Signum Dev Meetup Promo"/>
          <meta property="og:description" content="Checkout our upcoming Dev Meetup on Discord"/>
          <meta property="og:image" content={ThumbnailUrl} />
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://signum-promo.vercel.app/"/>
          <meta property="twitter:title" content="Signum Dev Meetup Promo"/>
          <meta property="twitter:description" content="Checkout our upcoming Dev Meetup on Discord"/>
          <meta property="twitter:image" content={ThumbnailUrl}/>
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700"
            rel="stylesheet"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <WorkingProcessSection />
          {/*<InfoSection />*/}
          {/*<FeatureSection />*/}
          {/*<UpdateScreen />*/}
          {/*<PricingSection />*/}
          {/*<PartnerSection />*/}
          {/*<TestimonialSection />*/}
          {/*<FaqSection />*/}
          {/*<TrialSection />*/}
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasModern;
