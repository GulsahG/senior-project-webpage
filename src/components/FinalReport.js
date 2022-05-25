import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/final/img1.png';
import img2 from '../assets/final/img2.png';
import img3 from '../assets/final/img3.png';
import img4 from '../assets/final/img4.png';
import img5 from '../assets/final/img5.png';
import img6 from '../assets/final/img6.png';
import img7 from '../assets/final/img7.png';
import img8 from '../assets/final/img8.png';
import img9 from '../assets/final/img9.png';
import img10 from '../assets/final/img10.png';
import img11 from '../assets/final/img11.png';
import img12 from '../assets/final/img12.png';
import img13 from '../assets/final/img13.png';
import img14 from '../assets/final/img14.png';
import img15 from '../assets/final/img15.png';
import img16 from '../assets/final/img16.png';
import React from 'react';
import { Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const FinalReport = () => {
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
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img4}
            alt="Report Page 4"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img5}
            alt="Report Page 5"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img6}
            alt="Report Page 6"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img7}
            alt="Report Page 7"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img8}
            alt="Report Page 8"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img9}
            alt="Report Page 9"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img10}
            alt="Report Page 10"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img11}
            alt="Report Page 11"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img12}
            alt="Report Page 12"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img13}
            alt="Report Page 13"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img14}
            alt="Report Page 14"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img15}
            alt="Report Page 15"
            bg="white"
          />
        </div>
        <div>
          <Image
            boxSize={['92.5vw', '82.5vw', '75vw', '45vw']}
            objectFit="cover"
            src={img16}
            alt="Report Page 16"
            bg="white"
          />
        </div>
      </Carousel>
    </Flex>
  );
};

export default FinalReport;
