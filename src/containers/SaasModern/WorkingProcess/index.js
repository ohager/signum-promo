import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import NextImage from 'next/image'
import Container from 'common/components/UI/Container';
import ProcessItem, { ProcessIndex } from './workingProcess.style';
import { PROCESS_ITEMS } from 'common/data/SaasModern';
import QrCodeImage from 'common/assets/image/qrcode-raffle-20211003.png'

const Blurred = styled.div`
  filter: blur(4px);
`

const WorkingProcessSection = ({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading,
  processRow,
  processCol,
  processImageStyle,
  processTitleStyle,
  processDescriptionStyle,
  processParticipate,
  fillButton,
}) => {
  return (
    <Box {...sectionWrapper} as="section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="PARTICIPATION PROCESS" />
          <Heading
            {...secHeading}
            content="Follow the steps to participate"
          />
        </Box>

        <Box {...processRow}>
          {PROCESS_ITEMS.map((item, index) => (
            <Box
              {...processCol}
              key={`process-item-${index}`}
              className="process_item_col"
            >
              <ProcessItem className="process_item">
                <ProcessIndex>{item.index || index + 1}</ProcessIndex>
                <Image
                  src={item.image?.src}
                  alt={`process-image-${index + 1}`}
                  {...processImageStyle}
                />
                <Heading as="h3" content={item.title} {...processTitleStyle} />
                <Text content={item.description} {...processDescriptionStyle} />
              </ProcessItem>
            </Box>
          ))}
        </Box>

        <Box {...processParticipate}>
          <Blurred>
           <NextImage src={QrCodeImage} alt="QR Code" height={256} width={256} />
          </Blurred>
          <Heading content="Raffle is over"/>
        </Box>
      </Container>
    </Box>
  );
};

WorkingProcessSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  processRow: PropTypes.object,
  processCol: PropTypes.object,
  processImageStyle: PropTypes.object,
  processTitleStyle: PropTypes.object,
  processDescriptionStyle: PropTypes.object,
  processParticipate: PropTypes.object,
  fillButton: PropTypes.object,
};

WorkingProcessSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '15px', '15px', '15px', '15px'],
    pb: 0,
  },
  secTitleWrapper: {
    mb: ['60px', '100px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
  },
  processRow: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['0', '-15px', '-20px', '-35px', '-45px'],
    mr: ['0', '-15px', '-20px', '-35px', '-45px'],
  },
  processCol: {
    width: [1, 1 / 3],
    pl: ['0', '15px', '20px', '35px', '45px'],
    pr: ['0', '15px', '20px', '35px', '45px'],
    mb: '40px',
  },
  processImageStyle: {
    width: ['60px', '60px', '70px', 'auto'],
  },
  processTitleStyle: {
    fontSize: ['20px', '18px', '20px', '20px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.02em',
    mb: ['20px', '20px', '22px', '22px', '22px'],
    mt: '35px',
  },
  processDescriptionStyle: {
    fontSize: ['15px', '15px', '15px', '15px'],
    fontWeight: '400',
    color: '#343d48',
    lineHeight: '1.87',
  },
  processParticipate: {
    display: "flex",
    flexBox: true,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems:"center"
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
};

export default WorkingProcessSection;
