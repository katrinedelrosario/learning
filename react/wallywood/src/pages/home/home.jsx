import { ContentWrapper } from "../../components/app/contentwrapper/contentwrapper"
import SlideWrapper from "../../components/app/slidewrapper/slidewrapper"


const Home = () => {
    return (
        <>
            <SlideWrapper />
            <ContentWrapper
                title='sidste nyt...'
                description='description'
                subtitle='subtitle'
            >
            </ContentWrapper>
        </>
    )
}

export default Home
