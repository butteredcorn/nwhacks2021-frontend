import styled from "styled-components"
import ReactPageScroller from 'react-page-scroller'

import LandingSlide from '../components/LandingSlide'

import { ReactComponent as PartnerOne } from '../assets/landingpage/partner_1.svg';
import { ReactComponent as PartnerTwo } from '../assets/landingpage/partner_2.svg';
import { ReactComponent as PartnerThree } from '../assets/landingpage/partner_3.svg';


function Partner() {
    const slides = [{
        header: 'Partner With Us',
        text: "Let's simplify dine in. It's as easy as one, two, three",
        illustration: <PartnerOne style={{ width: '100%', height: 'auto' }} />
    }, {
        header: 'Food Delivery',
        text: 'Just kidding! but dine in can be easier. We can help! Here’s how: ',
        illustration: <PartnerTwo style={{ width: '100%', height: 'auto' }} />
    }, {
        header: 'No Extra Work',
        text: 'Focus on the work that matters to you. We’ll take care of the rest.',
        illustration: <PartnerThree style={{ width: '100%', height: 'auto' }} />
    }];

    return (
        <ReactPageScroller>
            {slides.map(slide => <LandingSlide {...slide} button={{ text: 'Let’s do it', url: '#' }} alt={{ text: 'Dine With Us', url: '/' }} />)}
        </ReactPageScroller>
    )
}

export default Partner;
