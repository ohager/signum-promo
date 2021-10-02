import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Link from 'next/link';
import Icon from 'react-icons-kit';
import Fade from 'react-reveal/Fade';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import TiltShape from '../TiltShape';
import {BannerWrapper, DiscountWrapper, DiscountLabel} from './banner.style';
import {ic_play_circle_filled} from 'react-icons-kit/md/ic_play_circle_filled';
import ReactPlayer from "react-player/youtube";

const SecLinkProps = {target: '_blank', rel: "noreferrer noopener"}

// const RaffleDeepLink = 'https://burst-balance-alert.now.sh/api/redirect?url=signum%3A%2F%2Fv1%3Faction%3Dpay%26payload%3DeyJyZWNpcGllbnQiOiJTLUdXVjQtUzRFSy1IQUczLUVXQ0pWIiwiYW1vdW50UGxhbmNrIjoiNTAwMDAwMDAiLCJmZWVQbGFuY2siOiIxNDcwMDAwIiwibWVzc2FnZSI6ImRldm1lZXR1cDAzMTAiLCJpbW11dGFibGUiOnRydWUsImVuY3J5cHQiOmZhbHNlfQ'
const RaffleDeepLink = 'https://burst-balance-alert.now.sh/api/redirect?url=signum%3A%2F%2Fv1%3Faction%3Dpay%26payload%3DeyJyZWNpcGllbnQiOiJTLUdXVjQtUzRFSy1IQUczLUVXQ0pWIiwiYW1vdW50UGxhbmNrIjoiMzAwMDAwMDAiLCJmZWVQbGFuY2siOiIxNDcwMDAwIiwibWVzc2FnZSI6ImRldm1lZXR1cDAzMTAiLCJpbW11dGFibGUiOnRydWUsImVuY3J5cHQiOmZhbHNlLCJtZXNzYWdlSXNUZXh0Ijp0cnVlfQ='

const PlayerWrapper = styled.div`
  height: 240px;
  @media (min-width: 480px) {
    height: 320px;
  }
  @media (min-width: 768px) {
    height: 480px;
  }
  @media (min-width: 1280px) {
    height: 640px;
  }
  @media (min-width: 1280px) {
    height: 720px;
  }
`

const BannerSection = ({
                         col,
                         contentWrapper,
                         discountAmount,
                         discountText,
                         title,
                         description,
                         videoWrapper,
                         buttonWrapper,
                         button,
                         fillButton,
                       }) => {
  return (
    <BannerWrapper id="banner_section">
      <TiltShape/>
      <Container>
        <Box {...col}>
          <Box {...contentWrapper}>
            {/*<DiscountWrapper>*/}
            {/*  <DiscountLabel>*/}
            {/*    <Text {...discountAmount} content="25% Save" />*/}
            {/*    <Text*/}
            {/*      {...discountText}*/}
            {/*      content="for first month trail version"*/}
            {/*    />*/}
            {/*  </DiscountLabel>*/}
            {/*</DiscountWrapper>*/}
            <Heading
              {...title}
              content="October Meetup Raffle"
            />
            <Text
              {...description}
              content="We are running a smart contract based Raffle for the October Dev Meet. Click the button and participate"
            />
            <Box {...buttonWrapper}>
              <a href={RaffleDeepLink}>
                <Button {...fillButton} title="PARTICIPATE NOW"/>
              </a>
              <a href="https://www.youtube.com/watch?v=nLrWJWTyIB8" {...SecLinkProps}>
                <Button
                  {...button}
                  title="WATCH LAST MEETUP"
                  icon={<Icon icon={ic_play_circle_filled} size={30}/>}
                  iconPosition="left"
                />
              </a>
            </Box>
          </Box>
          <Box {...videoWrapper}>
            <Fade bottom>
              <PlayerWrapper>
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=khT-8kKDVgc'
                             width="100%"
                             height="100%"
                             loop
                />
              </PlayerWrapper>
              {/*<NextImage src={BannerImage} alt="banner image"/>*/}
            </Fade>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  col: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  videoWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object,
};

BannerSection.defaultProps = {
  col: {
    flexBox: true,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '50%'],
    mb: '40px',
  },
  title: {
    fontSize: ['24px', '32px', '40px', '42px', '46px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.2',
    textAlign: 'center',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#00865b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  videoWrapper: {
    width: "100%",
    height: "100%"
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span',
  },
  fillButton: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'secondaryWithBg',
    minWidth: ['auto', '150px'],
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '35px',
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
};

export default BannerSection;
