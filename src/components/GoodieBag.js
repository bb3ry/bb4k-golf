import * as React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BsGift } from 'react-icons/bs'
import { AiOutlineGift } from 'react-icons/ai'
const GoodieBag = ({ heading, subHeading }) => {

    const giftData = useStaticQuery(graphql`
query giftQuery {
    allContentfulGoodieBag {
      edges {
        node {
          gift
          giftImage {
            description
            title
            gatsbyImageData
            publicUrl
          }
        }
      }
    }
  }
`)

    function getGifts(giftData) {
        const giftsArray = []
        giftData.allContentfulGoodieBag.edges.forEach((item, index) => {
            const image = getImage(item.node.giftImage)
            giftsArray.push(
                <GiftCard key={index}>
                    <GiftGatsbyImage
                        image={image}
                        alt={item.node.giftImage.title}
                    />
                    <GiftInfo>
                        <Wrap>
                            <GiftTitle>
                                <BsGift /> {item.node.giftImage.title}
                            </GiftTitle>
                        </Wrap>
                    </GiftInfo>
                </GiftCard>
            )

        })
        return giftsArray
    }

    return (
        <GoodieBagContainer>
            <GoodieBagHeading><AiOutlineGift color="#43B54C" /> {heading}</GoodieBagHeading>
            <GoodieBagSubHeading>{subHeading}</GoodieBagSubHeading>
            <GoodieBagWrapper>{getGifts(giftData)}</GoodieBagWrapper>
        </GoodieBagContainer>
    )
}
export default GoodieBag

const GoodieBagContainer = styled.div`
min-height: 95vh;
width:100%;
padding: 2rem calc((100vw - 1300px) / 2);
color: #FFF;
background-color: #6660A9;
-webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.6);
	   -moz-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.6);
	        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.6);
`
const GoodieBagHeading = styled.h1`

font-size: clamp(1.5rem, 5vw, 2rem);
text-align: center;
margin-bottom: 1rem;
color: #FFF;
font-weight: 700;
`
const GoodieBagSubHeading = styled.div`
font-size: clamp(1rem, 5vw, 1rem);
text-align: center;
margin-bottom: 2rem;
margin-left:1rem;
margin-right:1rem;
color: #FFF;
font-weight: 700;
`
const GoodieBagWrapper = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-gap: 10px;
 justify-items: center;
 padding: 0 2rem;

 @media screen and (max-width: 1024px){
    grid-template-columns: 1fr 1fr; 
 }
 @media screen and (max-width: 868px){
    grid-template-columns: repeat(2, 1fr); 
 }
 @media screen and (max-width: 580px){
    grid-template-columns: 1fr; 
 }
`
const GiftGatsbyImage = styled(GatsbyImage)`
height: 100%;
max-width: 100%;
position: relative;
border-radius: 10px;
filter: brightness(70%);
transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover {
    filter: brightness(100%);
}
`
const GiftCard = styled.div`
line-height: 2;
width: 100%;
height: 20rem;
position: relative;
border-radius: 10px;
transition: 0.2s ease;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const GiftInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0.2rem;

@media screen and (max-width: 280px){
    padding: 0.1rem;
}
`

const Wrap = styled.div`
display: flex;
align-items: center;
position: absolute;
top: 17rem;

`

const GiftTitle = styled.div`
font-weight: 700;
font-size: 1rem;
margin-left: 0.5rem;
background-color: rgba(0, 0, 0, 0.5);
border-radius: 10px;
padding-left:10px;
padding-right:10px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 3px;
`