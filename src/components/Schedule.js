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
                        <Event>
                            <Task>
                                {item.node.event}
                            </Task>
                            <Desc>
                                {item.node.eventDescription}
                            </Desc>
                        </Event>
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
    border-bottom: 3px solid darken(#2D3134, 15%);
    margin: 0 auto;
    padding-top: 1rem;
    width: 90%;
    margin-top: 1.5rem;
    margin-bottom: 20px;
    max-width:100%;
    padding-left:5rem;
    padding-right:5rem;
    min-width:250px;
    @media screen and (max-width:1024px){
        padding-left:1rem;
        padding-right:1rem;
    }

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
    height:1rem;
`

const FullTime = styled.div`
    display: table-cell;
    min-width: 75px;
    padding: 0 20px 0 10px;
    text-align: left;
    align-items: center;
    font-weight: 700;
    font-size: 1rem;
    @media screen and (max-width:400px){
        font-size: 0.9rem;
    }
`
const Event = styled.div`
    color:#ad3181;
    text-align: right;
    font-weight: 700;
`
const Desc = styled.div`
    display:block;
    font-size: 0.8rem;
    color: #6660A9;
    text-align: right;
    font-weight: 700;
    padding: 0 10px;
    @media screen and (max-width:400px){
        font-size: 0.7rem;
        padding: 0;
    }
`
const Task = styled.div`
    font-size: 1rem;
    padding: 0 10px;
    text-align: right;
    font-weight: 700;
    @media screen and (max-width:400px){
        font-size: 0.9rem;
        padding: 0;
    }
`
const ListItem = styled.li`
    padding: 10px;
    border-bottom: 2px solid #6660A9;

&:hover {
    background-color: rgba(0, 0, 0, 0.2);
}

`

