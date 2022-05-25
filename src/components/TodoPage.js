import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const TodoPage = () => {
  return (
    <Flex
      w={['85%', '90%', '90%', '80%']}
      m={['12.5vh auto', '10vh auto', '7.5vh auto', '7.5vh auto']}
    >
      <Table>
        <Thead style={{ backgroundColor: '#4776E6', color: '#f1f1f1' }}>
          <Tr>
            <Th>Name</Th>
            <Th>Priority</Th>
            <Th>Due Date</Th>
            <Th>Status</Th>
            <Th>Comments</Th>
            <Th>Assignee</Th>
          </Tr>
        </Thead>
        <Tbody style={{ fontWeight: '600' }}>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Backend Demo</Td>
            <Td>Medium</Td>
            <Td>4 February 2022</Td>
            <Td style={{ color: '#d91145' }}>Completed</Td>
            <Td style={{ textAlign: 'center', padding: '0.25rem 0.5rem' }}>
              Created the Docker and Spring Boot implementation for the project.
            </Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              Tunç G., Deniz D.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Moodle Web API Test</Td>
            <Td>High</Td>
            <Td>11 February 2021</Td>
            <Td style={{ color: '#d91145' }}>Completed</Td>
            <Td style={{ textAlign: 'center', padding: '0.25rem 0.5rem' }}>
              Tested the Moodle Web Services token, given to us by the IT
              department, and asked for additional access due to technical
              issues.
            </Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              Tunç G., Deniz D., Gülşah G.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Front-end Demo</Td>
            <Td>Medium</Td>
            <Td>22 February 2022</Td>
            <Td style={{ color: '#d91145' }}>Completed</Td>
            <Td style={{ textAlign: 'center', padding: '0.25rem 0.5rem' }}>
              Created the front-end system of the app with React and Next.js +
              the UI component library Chakra UI.
            </Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              Gülşah G.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Supabase Magic Link Authentication</Td>
            <Td>Low</Td>
            <Td>27 February 2022</Td>
            <Td style={{ color: '#d91145' }}>Completed</Td>
            <Td style={{ textAlign: 'center', padding: '0.25rem 0.5rem' }}>
              Implemented passwordless authentication for a limited amount of
              users with Supabase customized emails.
            </Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              Gülşah G.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Welcome Page Implementation</Td>
            <Td>Medium</Td>
            <Td>-</Td>
            <Td style={{ color: '#d91145' }}>Completed</Td>
            <Td style={{ textAlign: 'center', padding: '0.25rem 0.5rem' }}>
              The welcome page that the user sees after registering should be
              completed.
            </Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              Gülşah G.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Backend API Development (Endpoints)</Td>
            <Td>Medium</Td>
            <Td>-</Td>
            <Td style={{ color: '#d91145' }}>Completed</Td>
            <Td style={{ textAlign: 'center', padding: '0.25rem 0.5rem' }}>
              Endpoints for getting teachers list of courses and the list of
              students in those courses need to be implemented.
            </Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              Tunç G., Deniz D.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Frontend Showcase Development</Td>
            <Td>High</Td>
            <Td>-</Td>
            <Td style={{ color: '#d91145' }}>Completed</Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              Implementing the main page of the app (calendar), without any
              functionalities for now.
            </Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              Gülşah G.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Backend Database implementation for Assignments</Td>
            <Td>Medium</Td>
            <Td>-</Td>
            <Td style={{ color: '#d91145' }}>Completed</Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              The Assignments table need to be implemented in the database with
              NoSQL.
            </Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              Tunç G., Deniz D.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Integrating Backend and Frontend</Td>
            <Td>High</Td>
            <Td>6 May 2022</Td>
            <Td style={{ color: '#d91145' }}>Completed</Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              The Front-end system should be able to fetch all data from
              different functions through the Backend system.
            </Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              Tunç G., Deniz D., Gülşah G.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Adding Colour Blind Mode</Td>
            <Td>Low</Td>
            <Td>-</Td>
            <Td style={{ color: '#d91145' }}>Completed</Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              Adding a colour-blind theme switcher for every user's
              accessibility.
            </Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              Gülşah G.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Implementing Workload ALgorithm</Td>
            <Td>High</Td>
            <Td>24 May 2022</Td>
            <Td style={{ color: '#d91145' }}>Completed</Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              The workload organizer algorithm should be implemented for
              frontend suggestion purposes.
            </Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              Gülşah G., Deniz Dumanlı
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Fixing the last open bug</Td>
            <Td>High</Td>
            <Td>30 May 2022</Td>
            <Td>In Progress</Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              The open issue on activity intervals should be fixed.
            </Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
              }}
            >
              Gülşah G., Deniz Dumanlı
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );
};

export default TodoPage;
