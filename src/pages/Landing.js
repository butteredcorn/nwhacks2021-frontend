import styled from "styled-components"
import ReactPageScroller from 'react-page-scroller'

import LandingSlide from '../components/LandingSlide'

function Landing({ }) {

    return (
        <ReactPageScroller>
            <LandingSlide />
            <LandingSlide />
            <LandingSlide />
        </ReactPageScroller>
    )
}

export default Landing;