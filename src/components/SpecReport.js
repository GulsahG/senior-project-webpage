import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import React from 'react';
import { Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const SpecReport = () => {
  return (
    <Flex w={["60%", "55%", "50%", "30%"]} m={["12.5vh auto", "10vh auto", "7.5vh auto", "7.5vh auto"]}>
    <Carousel swipeable={false} showThumbs={false}>
      <div>
        <Image boxSize={['90vw', '80vw', '70vw', '45vw']} objectFit="cover" src={img1} alt="Report Page 1" />
      </div>
      <div>
        <Image boxSize={['90vw', '80vw', '70vw', '45vw']} objectFit="cover" src={img2} alt="Report Page 2" />
      </div>
      <div>
        <Image boxSize={['90vw', '80vw', '70vw', '45vw']} objectFit="cover" src={img3} alt="Report Page 3" />
      </div>
      <div>
        <Image boxSize={['90vw', '80vw', '70vw', '45vw']} objectFit="cover" src={img4} alt="Report Page 4" />
      </div>
    </Carousel>
    </Flex>
  );
};

export default SpecReport;
