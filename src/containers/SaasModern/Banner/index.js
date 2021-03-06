import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
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
import {ic_emoji_events_twotone} from 'react-icons-kit/md/ic_emoji_events_twotone';
import {ic_contact_support_twotone} from 'react-icons-kit/md/ic_contact_support_twotone'
import {ic_local_florist_twotone} from 'react-icons-kit/md/ic_local_florist_twotone'
import {trophy} from 'react-icons-kit/fa/trophy';
import ReactPlayer from "react-player/youtube";
import Input from "../../../common/components/Input";

import {createDeeplink} from '@signumjs/util'
import {ReactQrCode} from "@devmehq/react-qr-code";

const SecLinkProps = {target: '_blank', rel: "noreferrer noopener"}

const withRedirectUrl = (url) => `https://burst-balance-alert.now.sh/api/redirect?url=${encodeURIComponent(url)}`

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

const Inline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const BannerSection = ({
                         col,
                         contentWrapper,
                         discountAmount,
                         discountText,
                         winnerText,
                         winnerWrapper,
                         stepsWrapper,
                         title,
                         description,
                         videoWrapper,
                         buttonWrapper,
                         button,
                         fillButton,
                         hintButton
                       }) => {
  const [deepLink, setDeepLink] = useState('')

  const handleChange = (text) => {
    const message = text.replace(/\s/g, '').toLowerCase()

    const link = message ? createDeeplink({
      action: 'pay',
      payload: {
        recipient: "S-ESEV-9WP7-G9XG-2BXFK",
        amountPlanck: 5_00000000,
        feePlanck: 735000,
        message,
        messageIsText: true,
        immutable: true,
        encrypt: false
      }
    }) : ''
    setDeepLink(link)
  }

  return (
    <BannerWrapper id="banner_section">
      <TiltShape/>
      <Container>
        <Box {...col}>
          <Box {...contentWrapper}>
            <Heading
              {...title}
              content="X-Mas Meetup Puzzle"
            />
            <Text
              {...description}
              content={<>This is the Meetup <a style={{color: "white", fontWeight: "600", textDecoration: "underline"}}
                                               href="https://github.com/deleterium/SmartC/blob/main/samples/XmasContest.smartc.c" {...SecLinkProps}>Smart
                Contract</a> based Puzzle </>}
            />
            <Box {...winnerWrapper} {...col}>
              <Text {...winnerText} content="The solution was:"/>
              <a href="https://chain.signum.network/tx/14262989068855621329" {...SecLinkProps}>
                <Button
                  {...button}
                  title="to the moon and beyond with signum"
                  style={{fontSize: "1.5em"}}
                />
              </a>
            </Box>

            {/*<Box {...winnerWrapper} {...col}>*/}
            {/*

              <Text {...winnerText} content="The winners are"></Text>*/}

            {/*  <Box>*/}

            {/*    <Inline>*/}
            {/*      <Text {...winnerText} content="1st"></Text>*/}
            {/*      <a href="https://chain.signum.network/tx/6680060990664405073" {...SecLinkProps}>*/}
            {/*        <Button*/}
            {/*          {...button}*/}
            {/*          title="S-6LQW-7TP3-WZQC-2TSD6 (falconalex91)"*/}
            {/*          icon={<Icon icon={ic_emoji_events_twotone} size={30}/>}*/}
            {/*          iconPosition="left"*/}
            {/*        />*/}
            {/*      </a>*/}
            {/*    </Inline>*/}
            {/*    <Inline>*/}
            {/*    </Inline>*/}
            {/*    <Inline>*/}
            {/*    </Inline>*/}
            {/*  </Box>*/}
            {/*</Box>*/}
            <Box {...stepsWrapper}>
              <ol>
                <li>
                  <Inline>
                    <Text {...winnerText} content="Congratz all the winners"/>
                  </Inline>
                </li>

                <li>
                  <Inline>
                    <Text {...winnerText} content="1st"/>
                    <a href="https://chain.signum.network/tx/6680060990664405073" {...SecLinkProps}>
                      <Button
                        {...button}
                        title="S-6LQW-7TP3-WZQC-2TSD6 (falconalex91)"
                        icon={<Icon icon={ic_emoji_events_twotone} size={30}/>}
                        iconPosition="left"
                      />
                    </a>
                  </Inline>
                </li>
                <li>
                  <Inline>
                    <Text {...winnerText} content="2nd"/>
                    <a href="https://chain.signum.network/tx/1592168158269548683" {...SecLinkProps}>
                      <Button
                        {...button}
                        title="S-8DFJ-DZVB-ZWN8-G99HB (Puddle Jumper)"
                        icon={<Icon icon={ic_emoji_events_twotone} size={30}/>}
                        iconPosition="left"
                      />
                    </a>
                  </Inline>
                </li>
                <li>
                  <Inline>
                    <Text {...winnerText} content="3rd"/>
                    <a href="https://chain.signum.network/tx/8378370603297224792" {...SecLinkProps}>
                      <Button
                        {...button}
                        title="S-MYD4-GMW2-85DL-9SJ3W (F-302)"
                        icon={<Icon icon={ic_emoji_events_twotone} size={30}/>}
                        iconPosition="left"
                      />
                    </a>
                  </Inline>
                </li>
                <li>
                  <Inline>

                    <Text {...winnerText} content="4th+"/>
                    <a href="https://chain.signum.network/tx/7441016481578533860" {...SecLinkProps}>
                      <Button
                        {...button}
                        title="S-4URW-QD2Z-72YT-FTQUJ (wolverine10)"
                        icon={<Icon icon={ic_emoji_events_twotone} size={30}/>}
                        iconPosition="left"
                      />
                    </a>
                  </Inline>
                </li>
                <li>
                  <Inline>
                    <Text {...winnerText} content="4th+"/>
                    <a href="https://chain.signum.network/tx/9604838836114221529" {...SecLinkProps}>
                      <Button
                        {...button}
                        title="S-BHGT-NTCV-K4VS-ACTUZ"
                        icon={<Icon icon={ic_emoji_events_twotone} size={30}/>}
                        iconPosition="left"
                      />
                    </a>
                  </Inline>
                </li>
                <li>
                  <Text/>
                </li>
                <li>
                  <Inline>
                    <Text {...winnerText} content="SNA"/>
                    <a href="https://chain.signum.network/tx/4322329816993246248" {...SecLinkProps}>
                      <Button
                        {...button}
                        title="SNA Donation: 904.89 SIGNA"
                        icon={<Icon icon={ic_local_florist_twotone} size={30}/>}
                        iconPosition="left"
                      />
                    </a>
                  </Inline>
                </li>
              </ol>
            </Box>

            {/*<Box>*/}
            {/*  <Input onChange={handleChange} placeholder="Enter the magic word(s) here..."/>*/}
            {/*  {deepLink.length === 0 ? (*/}
            {/*    <Box {...winnerWrapper} style={{textAlign: 'center'}}>*/}
            {/*      <Text {...description}*/}
            {/*            content="Please enter the magic word(s) first"*/}
            {/*      />*/}
            {/*      <a href='./#requirements'>*/}
            {/*        <Button*/}
            {/*          {...hintButton}*/}
            {/*          title="Requirements and Rules"*/}
            {/*          icon={<Icon icon={ic_contact_support_twotone} size={16}/>}*/}
            {/*          iconPosition="left"*/}
            {/*        />*/}
            {/*      </a>*/}
            {/*    </Box>*/}

            {/*  ) : (*/}
            {/*    <Box {...winnerWrapper}>*/}
            {/*      <Text {...description} textAlign="center" content="Click or Scan"/>*/}
            {/*      <Inline>*/}
            {/*        <a href={withRedirectUrl(deepLink)} {...SecLinkProps}>*/}
            {/*          <Button*/}
            {/*            {...fillButton}*/}
            {/*            title="Participate Now"*/}
            {/*            icon={<Icon icon={trophy} size={30}/>}*/}
            {/*            iconPosition="left"*/}
            {/*          />*/}
            {/*        </a>*/}
            {/*        <ReactQrCode value={deepLink} renderAs={"svg"} size={128}/>*/}
            {/*      </Inline>*/}
            {/*    </Box>*/}
            {/*  )*/}
            {/*  }*/}
            {/*</Box>*/}
            <Box {...buttonWrapper}>
              <a href="https://www.youtube.com/watch?v=oDqvgtVcqZs" {...SecLinkProps}>
                <Button
                  {...button}
                  title="WATCH NOVEMBER MEETUP"
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
                  url='https://youtu.be/8K4fbPCo3t8'
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
  winnerText: PropTypes.object,
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
  winnerText: {
    fontSize: ['18px', '20px', '20px', '20px', '20px'],
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
  },
  stepsWrapper: {
    marginTop: '1rem',
    borderRadius: '4px',
    padding: '2rem',
    border: '2px solid white',
    display: "flex",
    flexDirection: "column",
    justifyContent: 'flex-start',
  },
  winnerWrapper: {
    borderRadius: '4px',
    padding: '2rem',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  hint: {
    fontSize: ['10px', '12px', '12px', '12px', '12px'],
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
  hintButton: {
    type: 'button',
    fontSize: ['10px', '10px'],
    borderRadius: '4px',
    p: ['0px 8px', '0px 8px'],
    color: '#fff',
    colors: 'secondary',
    height: ['32px', '32px'],
    minHeight: 'auto',
  },
};

export default BannerSection;
