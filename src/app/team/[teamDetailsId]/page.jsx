import Cta from "../../ui/Cta";
import Div from "../../ui/Div";
import PageHeading from "../../ui/PageHeading";
import Spacing from "../../ui/Spacing";
import SocialWidget from "../../ui/Widget/SocialWidget";
import imgUrl from "../../../../public/images/member_details_1.jpeg";
import Image from "next/image";

// Mock team details data
const teamDetails = [
  {
    id: "1",
    name: "Melon Bulgery",
    role: "Product Designer",
    imageSrc: "/images/member_details_1.jpeg",
    description1:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium voltire doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    description2:
      "Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit."
  }
  // Add more team members as needed
];

export function generateStaticParams() {
  return teamDetails.map((member) => ({
    teamDetailsId: member.id.toString()
  }));
}

export default function TeamDetails({ params }) {
  // Find the specific team member based on the ID
  const member = teamDetails.find((m) => m.id === params.teamDetailsId);

  // If no member is found, return a 404-like page
  if (!member) {
    return (
      <Div className="container">
        <h1>Team Member Not Found</h1>
      </Div>
    );
  }

  return (
    <>
      <PageHeading
        title="Team Details"
        bgSrc="/images/team_hero_bg.jpeg"
        pageLinkText="Team Details"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image
                src={member.imageSrc}
                alt="Member"
                className="w-100"
                placeholder="blur"
                blurDataURL={member.imageSrc}
                width={1000}
                height={1000}
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <Spacing lg="0" md="45" />
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title">{member.name}</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">{member.role}</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">{member.description1}</p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">{member.description2}</p>
              <Div className="cs-height_45 cs-height_lg_30" />
              <SocialWidget />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
  <Cta
    title="Let's discuss make <br />something <i>cool</i> together"
    btnText="Book a free Consultation"
    btnLink="/contact"
    bgSrc="/images/cta_bg.jpeg"
  />
</Div>
    </>
  );
}
