import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/design/img1.png';
import img2 from '../assets/design/img2.png';
import img3 from '../assets/design/img3.png';
import img4 from '../assets/design/img4.png';
import img5 from '../assets/design/img5.png';
import img6 from '../assets/design/img6.png';
import img7 from '../assets/design/img7.png';
import img8 from '../assets/design/img8.png';
import React from 'react';
import { Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const DesignReport = () => {
  return (
    <Flex
      w={['65%', '55%', '50%', '30%']}
      m={['12.5vh auto', '10vh auto', '7.5vh auto', '7.5vh auto']}
    >
      <Carousel swipeable={false} showThumbs={false}>
        <div>
          <Image
            boxSize={['90vw', '80vw', '70vw', '45vw']}
            objectFit="scale-down"
            src={img1}
            alt="Report Page 1"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['90vw', '80vw', '70vw', '45vw']}
            objectFit="scale-down"
            src={img2}
            alt="Report Page 2"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['90vw', '80vw', '70vw', '45vw']}
            objectFit="scale-down"
            src={img3}
            alt="Report Page 3"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['90vw', '80vw', '70vw', '45vw']}
            objectFit="scale-down"
            src={img4}
            alt="Report Page 4"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['90vw', '80vw', '70vw', '45vw']}
            objectFit="scale-down"
            src={img5}
            alt="Report Page 5"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['90vw', '80vw', '70vw', '45vw']}
            objectFit="scale-down"
            src={img6}
            alt="Report Page 6"
            bg="white"
          />
        </div><div>
          <Image
            boxSize={['90vw', '80vw', '70vw', '45vw']}
            objectFit="scale-down"
            src={img7}
            alt="Report Page 7"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['90vw', '80vw', '70vw', '45vw']}
            objectFit="scale-down"
            src={img8}
            alt="Report Page 8"
            bg="white"
          />
        </div>
      </Carousel>
    </Flex>
  );
};

export default DesignReport;
