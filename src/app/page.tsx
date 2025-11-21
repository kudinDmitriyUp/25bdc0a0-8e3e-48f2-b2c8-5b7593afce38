"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="animatedGrid"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Luxe Collections"
          navItems={[
            { name: "Collections", id: "collections" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Timeless Elegance Redefined"
          description="Discover our curated collection of premium fashion pieces crafted with precision and luxury in mind"
          tag="Premium Collection"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758471442-smtjqbhh.jpg"
          imageAlt="Luxury fashion clothing collection"
          textPosition="bottom-left"
          showDimOverlay={true}
          showBlur={true}
          buttons={[
            { text: "Shop Now", href: "collections" },
            { text: "Explore Collection", href: "#" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Luxe Collections"
          description={[
            "Luxe Collections represents a commitment to sophisticated style and uncompromising quality. Since our founding, we have dedicated ourselves to creating timeless pieces that transcend trends and celebrate individuality.",
            "Each garment in our collection is meticulously crafted using premium fabrics and refined techniques, ensuring that every piece tells a story of elegance and attention to detail. We believe fashion should empower, inspire, and endure.",
            "Our curated selection combines classic sophistication with contemporary design, offering styles for the discerning individual who values quality above all else."
          ]}
          showBorder={true}
          buttons={[
            { text: "View Our Story", href: "#" }
          ]}
        />
      </div>

      <div id="collections" data-section="collections">
        <ProductCardOne
          title="Featured Collections"
          description="Explore our handpicked selection of premium fashion pieces"
          tag="New Arrivals"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Silk Evening Dress",
              price: "$845",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758472132-j7b0z2py.jpg",
              imageAlt: "Elegant silk evening dress"
            },
            {
              id: "2",
              name: "Tailored Suit",
              price: "$1,295",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758472867-ozkxvzxq.jpg",
              imageAlt: "Premium tailored suit"
            },
            {
              id: "3",
              name: "Designer Handbag",
              price: "$1,450",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758473645-wp5s9bjp.jpg",
              imageAlt: "Luxury leather handbag"
            },
            {
              id: "4",
              name: "Luxe Blouse",
              price: "$595",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758474410-inbqqx06.jpg",
              imageAlt: "Premium silk blouse"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real stories from clients who have embraced our premium collections"
          tag="Client Reviews"
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Victoria Sterling",
              role: "Fashion Editor",
              company: "Vogue Style Magazine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758475948-d8m3lje3.jpg",
              imageAlt: "Victoria Sterling professional portrait"
            },
            {
              id: "2",
              name: "James Mitchell",
              role: "CEO",
              company: "Elite Corporate Group",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758476751-bhvzgql7.jpg",
              imageAlt: "James Mitchell professional portrait"
            },
            {
              id: "3",
              name: "Sophie Laurent",
              role: "Style Influencer",
              company: "LuxeStyle Collective",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758477459-tnpzslxs.jpg",
              imageAlt: "Sophie Laurent professional portrait"
            },
            {
              id: "4",
              name: "Alexander Cruz",
              role: "Fashion Designer",
              company: "Haute Couture Studios",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758478334-lwrzh3rb.jpg",
              imageAlt: "Alexander Cruz professional portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get In Touch With Us"
          description="Have questions about our collections or need styling advice? Our team is here to help. Reach out today and let us assist you in finding your perfect piece."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your style preferences or questions",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Collections",
              items: [
                { label: "Women", href: "#" },
                { label: "Men", href: "#" },
                { label: "Accessories", href: "#" },
                { label: "Sale", href: "#" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Craftsmanship", href: "#" },
                { label: "Sustainability", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Shipping", href: "#" },
                { label: "Returns", href: "#" },
                { label: "FAQ", href: "#" }
              ]
            }
          ]}
          logoText="Luxe Collections"
          copyrightText="© 2025 Luxe Collections. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}