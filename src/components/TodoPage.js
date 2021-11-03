import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const TodoPage = () => {
  return (
    <Flex
      w={['85%', '80%', '80%', '75%']}
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
          </Tr>
        </Thead>
        <Tbody style={{ fontWeight: '600' }}>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Project Draft</Td>
            <Td>Medium</Td>
            <Td>8 October 2021</Td>
            <Td style={{ color: '#d91145', textDecoration: 'line-through' }}>
              Completed
            </Td>
            <Td style={{ textAlign: 'center', padding: '0.25rem 0.5rem' }}>
              Created the draft to present the idea to the IT department.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>IT Department Meeting</Td>
            <Td>Medium</Td>
            <Td>9 October 2021</Td>
            <Td style={{ color: '#d91145', textDecoration: 'line-through' }}>
              Completed
            </Td>
            <Td style={{ textAlign: 'center', padding: '0.25rem 0.5rem' }}>
              Had a meeting with the head of IT department about the project
              requirements.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Project Website</Td>
            <Td>High</Td>
            <Td>18 October 2021</Td>
            <Td style={{ color: '#d91145', textDecoration: 'line-through' }}>
              Completed
            </Td>
            <Td style={{ textAlign: 'center', padding: '0.25rem 0.5rem' }}>
              Built the project website accordingly to what we are given.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Moodle Cloud Services Research</Td>
            <Td>Low</Td>
            <Td>-</Td>
            <Td>In Progress</Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
                color: '#9c95a1',
              }}
            >
              To be given.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Project Proposal</Td>
            <Td>High</Td>
            <Td>18 October 2021</Td>
            <Td style={{ color: '#d91145', textDecoration: 'line-through' }}>
              Completed
            </Td>
            <Td style={{ textAlign: 'center', padding: '0.25rem 0.5rem' }}>
              Written a project proposal document / report as asked.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Project Specifications Report</Td>
            <Td>High</Td>
            <Td>5 November 2021</Td>
            <Td style={{ color: '#d91145', textDecoration: 'line-through' }}>
              Completed
            </Td>
            <Td style={{ textAlign: 'center', padding: '0.25rem 0.5rem' }}>
              Written a project specifications report as asked.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Analysis Report</Td>
            <Td>High</Td>
            <Td>22 November 2021</Td>
            <Td>Not Started</Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
                color: '#9c95a1',
              }}
            >
              To be given.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Moodle Plugins Research</Td>
            <Td>Medium</Td>
            <Td>-</Td>
            <Td>Not Started</Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
                color: '#9c95a1',
              }}
            >
              To be given.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>High Level Design Report</Td>
            <Td>High</Td>
            <Td>3 January 2022</Td>
            <Td>Not Started</Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
                color: '#9c95a1',
              }}
            >
              To be given.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Various Technologies Research</Td>
            <Td>Medium</Td>
            <Td>-</Td>
            <Td>Not Started</Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
                color: '#9c95a1',
              }}
            >
              To be given.
            </Td>
          </Tr>
          <Tr
            style={{
              backgroundColor: 'rgba(241, 241, 241, 0.8)',
              color: '#463c56',
            }}
          >
            <Td>Presentations</Td>
            <Td>High</Td>
            <Td>10 January 2021</Td>
            <Td>Not Started</Td>
            <Td
              style={{
                textAlign: 'center',
                padding: '0.25rem 0.5rem',
                color: '#9c95a1',
              }}
            >
              To be given.
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );
};

export default TodoPage;
