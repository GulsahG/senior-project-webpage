import { Flex, Heading } from '@chakra-ui/layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  return (
    <Flex
      w="100%"
      pl="1.25%"
      h="20vh"
      color="app.white"
      bg="linear-gradient(to left, #4776E6, #8E54E9)"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading pt="1.25vh" as="h1" fontSize="2.75rem">
        Course Workload Organizer
      </Heading>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="app.pink" w={6} h={6} />}
        w="auto"
        p="1.25vh 1.25vw"
        alignSelf="flex-end"
        fontSize="xl"
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
              boxShadow: '1px 1px #463c56, 2px 2px #463c56, 3px 3px #463c56, inset 0 0 2000px rgba(255, 255, 255, .5) !important',
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
              boxShadow: '1px 1px #463c56, 2px 2px #463c56, 3px 3px #463c56, inset 0 0 2000px rgba(255, 255, 255, .5) !important',
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
              boxShadow: '1px 1px #463c56, 2px 2px #463c56, 3px 3px #463c56, inset 0 0 2000px rgba(255, 255, 255, .5) !important',
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
              boxShadow: '1px 1px #463c56, 2px 2px #463c56, 3px 3px #463c56, inset 0 0 2000px rgba(255, 255, 255, .5) !important',
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
              boxShadow: '1px 1px #463c56, 2px 2px #463c56, 3px 3px #463c56, inset 0 0 2000px rgba(255, 255, 255, .5) !important',
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
  );
};

export default NavBar;
