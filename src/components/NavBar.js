import { Flex, Heading } from '@chakra-ui/layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  return (
    <Flex
      w="100%"
      p="0 1.25%"
      h="20vh"
      color="app.white"
      bg="app.blue"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading pt="1.25vh" as="h1" fontSize="5xl">
        Course Workload Organizer
      </Heading>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="app.grey" w={6} h={6} />}
        w="auto"
        p="2.5vh 0"
        alignSelf="flex-end"
        fontSize="xl"
      >
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink
            as={Link}
            to="/"
            _focus={{ boxShadow: 'none' }}
            style={{ transition: " all 0.25s ease-in-out", borderRadius: "4px", padding: "5px" }}
            _hover={{
              textDecoration: 'none',
              boxShadow: "1px 1px #ef3666, 2px 2px #ef3666, 3px 3px #ef3666",
              color: 'white',
              transform: "translateX(-3px)"
            }}
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            to="/todos"
            _focus={{ boxShadow: 'none' }}
            style={{ transition: " all 0.25s ease-in-out", borderRadius: "4px", padding: "5px" }}
            _hover={{
              textDecoration: 'none',
              boxShadow: "1px 1px #ef3666, 2px 2px #ef3666, 3px 3px #ef3666",
              color: 'white',
              transform: "translateX(-3px)"
            }}
          >
            TODOs
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            to="/specreport"
            _focus={{ boxShadow: 'none' }}
            style={{ transition: " all 0.25s ease-in-out", borderRadius: "4px", padding: "5px" }}
            _hover={{
              textDecoration: 'none',
              boxShadow: "1px 1px #ef3666, 2px 2px #ef3666, 3px 3px #ef3666",
              color: 'white',
              transform: "translateX(-3px)"
            }}
          >
            Project Specifications Report
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            to="/analysisreport"
            _focus={{ boxShadow: 'none' }}
            style={{ transition: " all 0.25s ease-in-out", borderRadius: "4px", padding: "5px" }}
            _hover={{
              textDecoration: 'none',
              boxShadow: "1px 1px #ef3666, 2px 2px #ef3666, 3px 3px #ef3666",
              color: 'white',
              transform: "translateX(-3px)"
            }}
          >
            Analysis Report
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            to="/designreport"
            _focus={{ boxShadow: 'none' }}
            style={{ transition: " all 0.25s ease-in-out", borderRadius: "4px", padding: "5px" }}
            _hover={{
              textDecoration: 'none',
              boxShadow: "1px 1px #ef3666, 2px 2px #ef3666, 3px 3px #ef3666",
              color: 'white',
              transform: "translateX(-3px)"
            }}
          >
            High Level Design Report
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
};

export default NavBar;
