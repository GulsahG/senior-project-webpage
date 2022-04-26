import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/testplan/img1.png';
import img2 from '../assets/testplan/img2.png';
import img3 from '../assets/testplan/img3.png';
import React from 'react';
import { Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const TestPlanReport = () => {
  return (
    <Flex
      w={['65%', '55%', '50%', '30%']}
      m={['12.5vh auto', '10vh auto', '7.5vh auto', '7.5vh auto']}
    >
      <Carousel swipeable={false} showThumbs={false}>
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img1}
            alt="Report Page 1"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img2}
            alt="Report Page 2"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img3}
            alt="Report Page 3"
            bg="white"
          />
        </div>
      </Carousel>
    </Flex>
  );
};

export default TestPlanReport;
