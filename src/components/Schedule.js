import * as React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { GiGolfTee } from 'react-icons/gi'
import { BsClockHistory } from "react-icons/bs"

const Schedule = ({ heading }) => {

    const scheduleData = useStaticQuery(graphql`
    query scheduleQuery {
        allContentfulHourlySchedule(sort: {fields: startTime}) {
          edges {
            node {
              startTime(formatString: "HH:mm")
              event
              eventDescription
            }
          }
        }
      }
`)
    function getSchedule(scheduleData) {
        const scheduleArray = []

        scheduleData.allContentfulHourlySchedule.edges.forEach((item, index) => {
            scheduleArray.push(
                <ListItem key={index}>
                    <ScheduleFrame>
                        <FullTime>
                            <GiGolfTee color="#C63893" />   {item.node.startTime}
                        </FullTime>
                        <Task>
                            {item.node.event}
                        </Task>
                    </ScheduleFrame>
                </ListItem>
            )

        })
        return scheduleArray
    }

    return (
        <ScheduleContainer>
            <ScheduleHeading><BsClockHistory color="#6660A9" /> {heading}</ScheduleHeading>
            <ScheduleList>{getSchedule(scheduleData)}</ScheduleList>
        </ScheduleContainer>
    )
}
export default Schedule

const ScheduleContainer = styled.div`
border-radius: 4px;
background: white;
border-bottom: 3px solid darken(#2D3134, 15%);
margin: 0 auto;
padding-top: 1rem;
width: 80vw;
margin-bottom: 20px;
max-width:100%;
`
const ScheduleHeading = styled.h1`
     color: #6660A9;
	 padding: 0 20px 20px 20px;
     text-align:center;
`
const ScheduleList = styled.ul`
	 list-style-type: none;
`
const ScheduleFrame = styled.div`
    display: table;
    width: 100%;
`

const FullTime = styled.div`
display: table-cell;
min-width: 75px;
    padding: 0 20px 0 10px;
    text-align: left;
    align-items: center;
    font-weight: 700;
`
const Task = styled.div`
font-size: 18px;
    padding: 0 10px 0 10px;
    text-align: right;
    font-weight: 700;
`
const ListItem = styled.li`
padding: 10px;
border-bottom: 2px solid #6660A9;

&:hover {
    background-color: rgba(0, 0, 0, 0.2);
}

`

