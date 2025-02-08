import Cta from "../../ui/Cta";
import Div from "../../ui/Div";
import PageHeading from "../../ui/PageHeading";
import Sidebar from "../../ui/Sidebar.jsx/index.jsx";
import Spacing from "../../ui/Spacing";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import imgUrl from '../../../../public/images/post_5.jpeg';

// Mock blog details data
const blogDetails = [
  {
    id: '1',
    title: 'Creative studio programm coming soon',
    date: '07 Mar 2022',
    category: 'Tech',
    imageSrc: '/images/post_5.jpeg',
    content: [
      'Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.',
      'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of plea'
    ],
    blockquote: {
      text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, who expound the actual teachings of the great explorer of the truth, the master.',
      author: 'Loren Mulari'
    }
  },
  // Add more blog posts as needed
];

export function generateStaticParams() {
  return blogDetails.map((post) => ({
    blogId: post.id.toString(),
  }));
}

export default function BlogDetailsPage({ params }) {
  // Find the specific blog post based on the ID
  const post = blogDetails.find(
    (p) => p.id === params.blogId
  );

  // If no post is found, return a 404-like page
  if (!post) {
    return (
      <Div className="container">
        <h1>Blog Post Not Found</h1>
      </Div>
    );
  }

  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title='Blog Single'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText='blog-details'
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">

            {/* Start Details Post Content */}
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <Image 
                  src={post.imageSrc} 
                  alt="Post" 
                  className="w-100 cs-radius_15" 
                  placeholder="blur" 
                  blurDataURL={post.imageSrc}
                  width={1000}
                  height={600}
                />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">{post.date}</span>
                  <Link href="/blog" className="cs-post_avatar">{post.category}</Link>
                </Div>
                <h2 className="cs-post_title">{post.title}</h2>
                {post.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <blockquote className="cs-primary_font">
                  {post.blockquote.text}
                  <small>{post.blockquote.author}</small>
                </blockquote>
              </Div>
            </Div>
            {/* End Details Post Content */}

            {/* Start Comment Section */}
            <Spacing lg='30' md='30'/>
            <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
            <Spacing lg='5' md='5'/>
            <p className="cs-m0">Your email address will not be published. Required fields are marked *</p>
            <Spacing lg='40' md='30'/>
            <form className="row">
              <Div className="col-lg-6">
                <label>Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
                <Div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></Div>
              <Div className="col-lg-6">
                <label>Email*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Website*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Write Your Comment*</label>
                <textarea cols={30} rows={7} className="cs-form_field" />
                <Div className="cs-height_25 cs-height_lg_25" />
              </Div>
              <Div className="col-lg-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />               
                </button>
              </Div>
            </form>
            {/* End Comment Section */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            <Spacing lg='0' md='80'/>
            <Sidebar />
            {/* End Sidebar */}
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta 
          title='Let’s discuss make <br />something <i>cool</i> together' 
          btnText='Book a free Consultation' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
      {/* End CTA Section */}
    </>
  )
}
