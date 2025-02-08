import Button from "../../ui/Button";
import Cta from "../../ui/Cta";
import Div from "../../ui/Div";
import PageHeading from "../../ui/PageHeading";
import SectionHeading from "../../ui/SectionHeading";
import Spacing from "../../ui/Spacing";
import Image from "next/image";
import imgUrl from '../../../../public/images/portfolio_details_1.jpeg'

// Mock portfolio details data
const portfolioDetails = [
  {
    id: '1',
    title: 'Graffiti wall artwork',
    category: 'Artwork',
    location: 'United Kingdom',
    description1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium voltire doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    description2: 'Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.',
    imageSrc: '/images/portfolio_details_1.jpeg',
    software: 'Adobe Illustrator',
    dated: '14-Aug-2022',
    client: 'Andreo Bowla'
  },
  // Add more portfolio details as needed
];

export function generateStaticParams() {
  return portfolioDetails.map((detail) => ({
    portfolioDetailsId: detail.id.toString(),
  }));
}

export default function PortfolioDetailsPage({ params }) {
  // Find the specific portfolio detail based on the ID
  const detail = portfolioDetails.find(
    (d) => d.id === params.portfolioDetailsId
  );

  // If no detail is found, return a 404-like page
  if (!detail) {
    return (
      <Div className="container">
        <h1>Portfolio Detail Not Found</h1>
      </Div>
    );
  }

  return (
    <>
      <PageHeading 
        title='Portfolio Details'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO-DETAILS'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Image 
          src={detail.imageSrc} 
          alt="Details" 
          placeholder="blur" 
          blurDataURL={detail.imageSrc}
          className="cs-radius_15 w-100" 
          width={1000} 
          height={600} 
        />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title={detail.title} 
              subtitle='Creative' 
            >
              <Spacing lg='40' md='20'/>
              <p>{detail.description1}</p>
              <Spacing lg='10' md='10'/>
              <p>{detail.description2}</p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>{detail.category}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>{detail.location}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Software:</h3>
                <p className='cs-m0'>{detail.software}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>{detail.dated}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>{detail.client}</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
          <Div className="cs-page_navigation cs-center">
            <Div>
              <Button btnLink='/portfolio/portfolio-details' btnText='Prev Project' variant='cs-type1'/>
            </Div>
            <Div>
              <Button btnLink='/portfolio/portfolio-details' btnText='Next Project'/>
            </Div>
          </Div>
      </Div>
      <Spacing lg='145' md='80'/>
      <Cta 
        title='agency@arino.com' 
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      />
    </>
  )
}
