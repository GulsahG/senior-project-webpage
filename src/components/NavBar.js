import { Flex, Heading } from '@chakra-ui/layout';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
} from '@chakra-ui/react';
import { ChevronRightIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const NavBar = () => {
  const [display, changeDisplay] = useState('none');
  return (
    // Desktop
    <>
      <Flex
        w="100%"
        pl="1.25%"
        h="27.5vh"
        color="app.white"
        bg="linear-gradient(to left, #4776E6, #8E54E9)"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        display={['none', 'none', 'none', 'flex']}
      >
        <Heading pt="5vh" as="h1" w="85%" fontSize="2.75rem">
          Course Workload Organizer
        </Heading>
        <Breadcrumb
          spacing="0.5vw"
          separator={<ChevronRightIcon color="app.pink" w={6} h={6} />}
          w="100%"
          p={['1vh 1vw', '1vh 1vw', '1.25vh 1vw', '2.5vh 1.25vw']}
          fontSize="xl"
          display="flex"
          alignItems="center"
          justifyContent="end"
        >
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              as={Link}
              to="/"
              _focus={{ boxShadow: 'none' }}
              style={{
                transition: ' all 0.25s ease-in-out',
                borderRadius: '4px',
                padding: '5px',
                backdropFilter: 'saturate(180%) blur(16px)',
                boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
              }}
              _hover={{
                textDecoration: 'none',
                boxShadow:
                  '1px 1px #463c56, 2px 2px #463c56, 3px 3px #463c56, inset 0 0 2000px rgba(255, 255, 255, .5) !important',
                transform: 'translateX(-3px)',
              }}
              color="app.black"
              fontWeight="bold"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/todos"
              _focus={{ boxShadow: 'none' }}
              style={{
                transition: ' all 0.25s ease-in-out',
                borderRadius: '4px',
                padding: '5px',
                backdropFilter: 'saturate(180%) blur(16px)',
                boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
              }}
              _hover={{
                textDecoration: 'none',
                boxShadow:
                  '1px 1px #463c56, 2px 2px #463c56, 3px 3px #463c56, inset 0 0 2000px rgba(255, 255, 255, .5) !important',
                transform: 'translateX(-3px)',
              }}
              color="app.black"
              fontWeight="bold"
            >
              TODOs
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/specreport"
              _focus={{ boxShadow: 'none' }}
              style={{
                transition: ' all 0.25s ease-in-out',
                borderRadius: '4px',
                padding: '5px',
                backdropFilter: 'saturate(180%) blur(16px)',
                boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
              }}
              _hover={{
                textDecoration: 'none',
                boxShadow:
                  '1px 1px #463c56, 2px 2px #463c56, 3px 3px #463c56, inset 0 0 2000px rgba(255, 255, 255, .5) !important',
                transform: 'translateX(-3px)',
              }}
              color="app.black"
              fontWeight="bold"
            >
              Project Specifications Report
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/analysisreport"
              _focus={{ boxShadow: 'none' }}
              style={{
                transition: ' all 0.25s ease-in-out',
                borderRadius: '4px',
                padding: '5px',
                backdropFilter: 'saturate(180%) blur(16px)',
                boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
              }}
              _hover={{
                textDecoration: 'none',
                boxShadow:
                  '1px 1px #463c56, 2px 2px #463c56, 3px 3px #463c56, inset 0 0 2000px rgba(255, 255, 255, .5) !important',
                transform: 'translateX(-3px)',
              }}
              color="app.black"
              fontWeight="bold"
            >
              Analysis Report
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to="/designreport"
              _focus={{ boxShadow: 'none' }}
              style={{
                transition: ' all 0.25s ease-in-out',
                borderRadius: '4px',
                padding: '5px',
                backdropFilter: 'saturate(180%) blur(16px)',
                boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
              }}
              _hover={{
                textDecoration: 'none',
                boxShadow:
                  '1px 1px #463c56, 2px 2px #463c56, 3px 3px #463c56, inset 0 0 2000px rgba(255, 255, 255, .5) !important',
                transform: 'translateX(-3px)',
              }}
              color="app.black"
              fontWeight="bold"
            >
              High Level Design Report
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      {/* Mobile */}
      <IconButton
        aria-label="Open Menu"
        size="lg"
        mr={2}
        icon={
          <HamburgerIcon
            color="app.pink"
            w={[8, 10]}
            h={[8, 10]}
            style={{
              borderRadius: '4px',
              padding: '5px',
              backdropFilter: 'saturate(180%) blur(16px)',
              boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
              background: 'none !important',
            }}
          />
        }
        onClick={() => changeDisplay('flex')}
        display={['flex', 'flex', 'flex', 'none']}
      />
      <Flex
        w="100vw"
        display={display}
        bg="linear-gradient(to left, #4776E6, #8E54E9)"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="lg"
            icon={
              <CloseIcon
                color="app.grey"
                w={[6, 8, 10]}
                h={[6, 8, 10]}
                p={['5px', '10px']}
                style={{
                  borderRadius: '4px',
                  backdropFilter: 'saturate(180%) blur(16px)',
                  boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
                  background: 'none !important',
                }}
              />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Breadcrumb
            spacing="8px"
            w="100%"
            p="1.25vh 1.25vw"
            fontSize={['xl', '2xl', '3xl', '4xl']}
            separator=""
          >
            <BreadcrumbItem
              w="85%"
              m={['7.5vh 7.5% 3.75vh 7.5%', '7.5vh 7.5% 5vh 7.5%']}
              isCurrentPage
            >
              <BreadcrumbLink
                as={Link}
                to="/"
                _focus={{ boxShadow: 'none' }}
                style={{
                  transition: ' all 0.25s ease-in-out',
                  borderRadius: '4px',
                  padding: '5px',
                  backdropFilter: 'saturate(180%) blur(16px)',
                  boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
                  margin: '0 auto',
                }}
                _hover={{
                  textDecoration: 'none',
                  boxShadow:
                    '1px 1px #463c56, 2px 2px #463c56, 3px 3px #463c56, inset 0 0 2000px rgba(255, 255, 255, .5) !important',
                  transform: 'translateX(-3px)',
                }}
                color="app.black"
                fontWeight="bold"
                onClick={() => changeDisplay('none')}
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem w="85%" m={['3.75vh 7.5%', '5vh 7.5%']}>
              <BreadcrumbLink
                as={Link}
                to="/todos"
                _focus={{ boxShadow: 'none' }}
                style={{
                  transition: ' all 0.25s ease-in-out',
                  borderRadius: '4px',
                  padding: '5px',
                  backdropFilter: 'saturate(180%) blur(16px)',
                  boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
                  margin: '0 auto',
                }}
                _hover={{
                  textDecoration: 'none',
                  boxShadow:
                    '1px 1px #463c56, 2px 2px #463c56, 3px 3px #463c56, inset 0 0 2000px rgba(255, 255, 255, .5) !important',
                  transform: 'translateX(-3px)',
                }}
                color="app.black"
                fontWeight="bold"
                onClick={() => changeDisplay('none')}
              >
                TODOs
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem w="85%" m={['3.75vh 7.5%', '5vh 7.5%']}>
              <BreadcrumbLink
                as={Link}
                to="/specreport"
                _focus={{ boxShadow: 'none' }}
                style={{
                  transition: ' all 0.25s ease-in-out',
                  borderRadius: '4px',
                  padding: '5px',
                  backdropFilter: 'saturate(180%) blur(16px)',
                  boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
                  margin: '0 auto',
                }}
                _hover={{
                  textDecoration: 'none',
                  boxShadow:
                    '1px 1px #463c56, 2px 2px #463c56, 3px 3px #463c56, inset 0 0 2000px rgba(255, 255, 255, .5) !important',
                  transform: 'translateX(-3px)',
                }}
                color="app.black"
                fontWeight="bold"
                onClick={() => changeDisplay('none')}
              >
                Project Specifications Report
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem w="85%" m={['3.75vh 7.5%', '5vh 7.5%']}>
              <BreadcrumbLink
                as={Link}
                to="/analysisreport"
                _focus={{ boxShadow: 'none' }}
                style={{
                  transition: ' all 0.25s ease-in-out',
                  borderRadius: '4px',
                  padding: '5px',
                  backdropFilter: 'saturate(180%) blur(16px)',
                  boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
                  margin: '0 auto',
                }}
                _hover={{
                  textDecoration: 'none',
                  boxShadow:
                    '1px 1px #463c56, 2px 2px #463c56, 3px 3px #463c56, inset 0 0 2000px rgba(255, 255, 255, .5) !important',
                  transform: 'translateX(-3px)',
                }}
                color="app.black"
                fontWeight="bold"
                onClick={() => changeDisplay('none')}
              >
                Analysis Report
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem w="85%" m={['3.75vh 7.5%', '5vh 7.5%']}>
              <BreadcrumbLink
                as={Link}
                to="/designreport"
                _focus={{ boxShadow: 'none' }}
                style={{
                  transition: ' all 0.25s ease-in-out',
                  borderRadius: '4px',
                  padding: '5px',
                  backdropFilter: 'saturate(180%) blur(16px)',
                  boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
                  margin: '0 auto',
                }}
                _hover={{
                  textDecoration: 'none',
                  boxShadow:
                    '1px 1px #463c56, 2px 2px #463c56, 3px 3px #463c56, inset 0 0 2000px rgba(255, 255, 255, .5) !important',
                  transform: 'translateX(-3px)',
                }}
                color="app.black"
                fontWeight="bold"
                onClick={() => changeDisplay('none')}
              >
                High Level Design Report
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;
