import styled from "styled-components"
import ReactPageScroller from 'react-page-scroller'

import LandingSlide from '../components/LandingSlide'

import { ReactComponent as DineOne } from '../assets/landingpage/dine_1.svg';
import { ReactComponent as DineTwo } from '../assets/landingpage/dine_2.svg';
import { ReactComponent as DineThree } from '../assets/landingpage/dine_3.svg';


function Landing() {
    const slides = [{
        header: 'Dine In Simplified',
        text: 'The complete dine in experience in the palm of your hand.',
        illustration: <DineOne style={{ width: '100%', height: 'auto' }} />
    }, {
        header: 'Paper Is Dead',
        text: 'Enjoy endlessly browsing the menu. Now 100% paper free.',
        illustration: <DineTwo style={{ width: '100%', height: 'auto' }} />
    }, {
        header: 'Dine & Dash',
        text: 'Figuratively speaking but our checkout is that fast.',
        illustration: <DineThree style={{ width: '100%', height: 'auto' }} />
    }];

    return (
        <ReactPageScroller>
            {slides.map(slide => <LandingSlide {...slide} button={{ text: 'Try now', url: '/home' }} alt={{ text: 'Partner With Us', url: '/partner' }} />)}
        </ReactPageScroller>
    )
}

export default Landing;
