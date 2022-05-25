import { Flex, Heading, Text, Image, Box } from '@chakra-ui/react';
import gulsah from '../assets/gulsah.jpg';
import poster from '../assets/poster.png';
import tunc from '../assets/tunc.jpg';
import deniz from '../assets/deniz.jpg';
import React from 'react';

const IndexPage = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w="100%"
      mt="7.5vh"
    >
      <Flex
        alignItems="center"
        justifyContent="space-evenly"
        flexDirection={['column', 'column', 'row', 'row']}
        w={['90%', '80%', '75%', '70%']}
      >
        <Box flex="3">
          <Heading
            as="h1"
            size="2xl"
            color="app.lightPink"
            style={{ textShadow: '-2px 4px 0 rgba(0,0,0,0.3)' }}
            textAlign="center"
          >
            Project Description
          </Heading>
          <Text
            textAlign="center"
            fontSize={['md', 'lg', 'lg', 'lg']}
            m={['5vh 1.25vw', '7.5vh 2.5vw', '7.5vh 2.5vw', '5vh 5vw']}
            color="app.white"
          >
            We wish to create this project for the benefits of students at our
            university so that they can better manage their time. We also want
            to reduce the amount of time teachers spend arranging quizzes,
            examinations, and assigning homework.
            <br />
            <br />
            The Course Workload Organizer is a project that, in the future, may
            benefit both students and instructors. We will pay careful attention
            to the user experience during the development process, so it will be
            informative and simple to use.
          </Text>
        </Box>
        <Image
          flex="1"
          boxSize="md"
          objectFit="contain"
          src={poster}
          alt="Poster Image"
          style={{
            padding: '5px',
            borderRadius: '4px',
            backdropFilter: 'saturate(180%) blur(16px)',
            boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
          }}
        ></Image>
      </Flex>
      <Heading
        as="h1"
        mt={8}
        size="2xl"
        color="app.lightPink"
        style={{ textShadow: '-2px 4px 0 rgba(0,0,0,0.3)' }}
      >
        Our Team
      </Heading>
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection={['column', 'row', 'row', 'row']}
      >
        <Flex
          m="5vh 0"
          w={['65%', '33%', '25%', '25%']}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            boxSize={['60%', '75%', '75%', '60%']}
            objectFit="cover"
            src={deniz}
            alt="Student Image"
            mb="2.5vh"
            style={{
              borderRadius: '4px',
              padding: '5px',
              backdropFilter: 'saturate(180%) blur(16px)',
              boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
            }}
          ></Image>
          <Text fontSize={['3xl', '2xl', '2xl', '3xl']} color="app.white">
            Deniz Dumanlı
          </Text>
        </Flex>
        <Flex
          m={['5vh 0', '0', '0', '0']}
          w={['65%', '33%', '25%', '25%']}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            boxSize={['60%', '75%', '75%', '60%']}
            objectFit="cover"
            src={gulsah}
            alt="Student Image"
            mb="2.5vh"
            style={{
              borderRadius: '4px',
              padding: '5px',
              backdropFilter: 'saturate(180%) blur(16px)',
              boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
            }}
          ></Image>
          <Text fontSize={['3xl', '2xl', '2xl', '3xl']} color="app.white">
            Gülşah Genç
          </Text>
        </Flex>
        <Flex
          m={['5vh 0', '0', '0', '0']}
          w={['65%', '33%', '25%', '25%']}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            boxSize={['60%', '75%', '75%', '60%']}
            objectFit="cover"
            src={tunc}
            alt="Student Image"
            mb="2.5vh"
            style={{
              borderRadius: '4px',
              padding: '5px',
              backdropFilter: 'saturate(180%) blur(16px)',
              boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
            }}
          ></Image>
          <Text fontSize={['3xl', '2xl', '2xl', '3xl']} color="app.white">
            Tunç Gürsoy
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
