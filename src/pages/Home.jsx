import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import SectionHeading from '../components/SectionHeading';


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}

      <section className="home-hero relative isolate flex min-h-[85vh] items-center overflow-hidden border-b border-farm-border bg-farm-surface py-20 max-[768px]:min-h-[85svh] max-[768px]:py-16">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-60">
          <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-[center_55%] bg-no-repeat max-[768px]:bg-center" />
        </div>

        <div className="relative z-[2] mx-auto w-[90%] max-w-[1400px]">
          <div className="max-w-[860px]">
            <span className="mb-5 inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:inline-block before:h-px before:w-6 before:bg-farm-gold">Farm OVERVIEW</span>
            <h1 className="mb-4 font-editorial text-[clamp(2.8rem,7vw,6rem)] leading-[1.08] text-farm-cream">SOANS FARM</h1>
            <p className="mb-10 font-normal tracking-wide text-farm-gold max-[768px]:mb-7">
              A World Of Horticultural And Botanical Diversity
            </p>
            <p className="text-[clamp(1.15rem,1.8vw,1.35rem)] font-light leading-relaxed text-farm-cream">
              A long-established agricultural farm, horticultural collection, and
              diverse cultivated landscape in coastal Karnataka.
            </p>
          </div>
        </div>
      </section>


      {/* 2. INTRODUCTION SECTION */}
      <section className="relative border-b border-farm-border bg-farm-surface py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">

          <div className="max-w-4xl">
            <SectionHeading
              number="01. FARM IDENTITY"
              title="A Working Agricultural Landscape"
              subtitle="Decades of horticultural experimentation & cultivation"
            />
            <p className="text-[clamp(1.15rem,1.8vw,1.35rem)] font-light leading-relaxed text-farm-cream">
              Soans Farm functions as a working agricultural farm, combining commercial plantations, fruit cultivation, plant collections, nursery activity, bamboo groves and labyrinth. </p>
            <p className="mt-4">
              Developed over decades, the farm brings together productive agriculture and an extensive living botanical collection.
            </p>


          </div>
        </div>
      </section>

      {/* 3. THE Farm / HISTORY SECTION */}
      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">
            
            <div>
              <SectionHeading
                number="02. HERITAGE & PHILOSOPHY"
                title="The Farm & Agricultural Legacy"
                subtitle="Rooted in practical stewardship and crop diversity"
              />
              <p className="text-[clamp(1.15rem,1.8vw,1.35rem)] font-light leading-relaxed text-farm-cream">
                The Farm's identity has been shaped by generations of agricultural practice, testing fruit species from diverse tropical regions and integrating traditional and alternative structures into the landscape.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/the-farm#history" className="inline-flex items-center gap-3 border border-farm-border-medium px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-farm-cream transition-all hover:border-farm-gold hover:bg-farm-gold/5 hover:text-farm-gold">
                  <span>READ HISTORY</span>
                  <ChevronRight size={14} />
                </Link>
                <Link to="/the-farm#philosophy" className="inline-flex items-center gap-3 border border-farm-border-medium px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-farm-cream transition-all hover:border-farm-gold hover:bg-farm-gold/5 hover:text-farm-gold">
                  <span>OUR PHILOSOPHY</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCES SECTION */}
      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="03. VISITOR ELEMENTS"
            title="Farm Experiences & Walks"
            subtitle="Walks, plant observations, and labyrinth"
          />

          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <img
                src="/jeep.png"
                alt="Jeep tour"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
                loading="lazy"
              />
            <div>
              <h4 className="mb-3 font-editorial text-2xl text-farm-cream">Plantation & Crop Trails</h4>
              <p className="text-farm-stone">The farm tour offers visitors an opportunity to experience the diversity of tropical agriculture up close, travelling through plantation landscapes, fruit-growing areas, and distinctive botanical collections. From rows of pineapple cultivation and cocoa plantations to bamboo groves, areca nut plantations, and the tranquil labyrinth, each stop offers a different perspective on the relationship between plants, cultivation, and the surrounding landscape.</p>
            </div>
          </div>



          <div className="mt-12 text-center">
            <Link to="/experiences" className="inline-flex items-center gap-3 border border-farm-border-medium px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-farm-cream transition-all hover:border-farm-gold hover:bg-farm-gold/5 hover:text-farm-gold">
              <span>EXPLORE ALL VISITOR EXPERIENCES</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>


      {/* 5. BOTANICAL GARDEN SECTION */}
      <section className="relative border-b border-farm-border bg-farm-surface py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">

            <div>
              <SectionHeading
                number="04. BOTANICAL COLLECTION"
                title="Decades of Plant Diversity"
                subtitle="An informal setting for horticultural study"
              />
              <p className="text-[clamp(1.15rem,1.8vw,1.35rem)] font-light leading-relaxed text-farm-cream">
                Developed gradually over decades, the living plant collection encompasses commercial fruit crops, exotic tropical species, spices, bamboo varieties, and medicinal herbs.
              </p>
              <p className="mt-4">
                Explore the farm through guided walks across its plantations and botanical collections discovering the diversity of tropical crops and the stories behind the farm.
              </p>
              <div className="mt-8">
                <a
                  href="https://tour.soansfarm.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-farm-gold px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-farm-gold transition-all hover:bg-farm-gold hover:text-farm-bg"
                >
                  <span>EXPLORE PLANT CATALOGUE</span>

                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. EXPLORE THE Farm TRANSITION */}
      <section className="relative border-b border-farm-border bg-farm-surface py-16 md:py-[110px]">
        <div className="mx-auto flex w-[90%] max-w-[1400px] flex-col items-center text-center">
          <span className="mb-5 inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:inline-block before:h-px before:w-6 before:bg-farm-gold">INTERACTIVE MAP & CATALOGUE</span>
          <h2 className="font-editorial text-[clamp(2.1rem,3.5vw,3.2rem)] leading-tight text-farm-cream">Explore the Virtual Tour & Farm Map</h2>
          <p className="mx-auto my-4 mb-10 max-w-[720px] text-[clamp(1.15rem,1.8vw,1.35rem)] font-light leading-relaxed text-farm-cream">
            Access the official Soans Farm spatial directory and plant catalogue.
          </p>
          <a
            href="https://tour.soansfarm.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-farm-gold px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-farm-gold transition-all hover:bg-farm-gold hover:text-farm-bg"
          >

            <span>ENTER TOUR.SOANSFarm.IN</span>

          </a>
        </div>
      </section>



      {/* 7. CULTIVATION SECTION — SEAMLESS EDITORIAL SPREAD */}
      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="05. CULTIVATION"
            title="Working Agricultural Character"
            subtitle="Commercial plantations and tropical fruit diversity"
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { image: '/hero.png', alt: 'Pineapple Plantation', title: 'Pineapple Plantation', copy: 'Commercial produce closely associated with the long-term identity of the Farm.' },
              { image: '/cocoa.jpg', alt: 'Cocoa Plantation', title: 'Cocoa Plantation', copy: 'Cocoa (Theobroma cacao) is a tropical plant that produces pods containing the beans used to make chocolate.' },
              { image: '/bamboo.jpg', alt: 'Bamboo Groves', title: 'Bamboo Groves', copy: 'Multiple bamboo varieties forming shaded pathways and natural architecture.' },
            ].map((crop) => <article key={crop.title} className="min-w-0">
              <div className="aspect-[4/3] overflow-hidden bg-farm-surface">
                <img src={crop.image} alt={crop.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]" />
              </div>
              <div className="pt-5">
                <h4 className="mb-2 font-editorial text-2xl text-farm-cream">{crop.title}</h4>
                <p className="text-[0.95rem] leading-relaxed text-farm-stone">{crop.copy}</p>
              </div>
            </article>)}
          </div>
          <div className="mt-12 text-center">
            <Link to="/cultivation" className="inline-flex items-center gap-3 border border-farm-border-medium px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-farm-cream transition-all hover:border-farm-gold hover:bg-farm-gold/5 hover:text-farm-gold">
              <span>VIEW ALL CULTIVATION AREAS</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>



      


      {/* 8. FARM STAY SECTION */}

      <section className="relative border-b border-farm-border py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="06.  FARM STAY"
            title="A Stay Within the Landscape"
            subtitle="The Soans Farm Cottage"
          />

          <div className="mx-auto grid max-w-[1050px] grid-cols-1 items-center gap-8 py-2 sm:grid-cols-[0.9fr_1fr] sm:gap-[clamp(2rem,5vw,5rem)]">
            <div className="aspect-[4/3] w-full overflow-hidden bg-farm-surface max-[640px]:aspect-[16/10]">
              <img
                src="/cottage.jpg"
                alt="The cottage at Soans Farm"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
                loading="lazy"
              />
            </div>

            <div className="max-w-[440px]">
              <span className="mb-5 block font-body text-xs uppercase tracking-[0.2em] text-farm-gold before:mr-3 before:inline-block before:h-px before:w-6 before:bg-farm-gold">The Farm Cottage</span>

              

              <p className="mb-7 leading-[1.85] text-farm-muted">
                Experience Soans Farm beyond a day visit with a stay in
                 a cottage, surrounded by tropical plantations and the
                  natural rhythms of farm life. Enjoy a slower pace, discover 
                  the farm’s horticultural diversity, and experience the 
                  landscape from a different perspective.
              </p>


            </div>
          </div>
        </div>
      </section>





      {/* 9. ENERGY HEALING SECTION */}
      <section className="relative border-b border-farm-border bg-farm-surface py-16 md:py-[110px]">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="07. Spaces for Stillness"
            title="Energy Healing"
            subtitle="Labyrinths, ancient patterns, and contemplative spaces"
          />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="text-[clamp(1.15rem,1.8vw,1.35rem)] font-light leading-relaxed text-farm-cream">
                Beyond its agricultural and botanical collections, Soans Farm
                features distinctive structures inspired by traditional patterns,
                sacred geometry, and contemplative practices.
              </p>

              <p className="mt-4">
                From the winding pathways of its labyrinths to the Medicine Wheel,
                pyramid, and spiral patterns, these spaces invite visitors to relax,
                and experience the landscape through quiet walking and reflection.
              </p>

              <div className="mt-8">
                <Link to="/energy-healing" className="inline-flex items-center gap-3 border border-farm-border-medium px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-farm-cream transition-all hover:border-farm-gold hover:bg-farm-gold/5 hover:text-farm-gold">
                  <span>EXPLORE ENERGY Healing</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            <div>
              <img
                src="/labyrinth.jpg"
                alt="The Labyrinth"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>



      {/* 10. CONTACT SECTION */}

      <section className="relative border-b border-farm-border py-16 md:py-[110px]" id="contact">
        <div className="mx-auto w-[90%] max-w-[1400px]">
          <SectionHeading
            number="08. CONTACT"
            title="Visit Soans Farm"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Instagram */}
            <div className="border-t border-farm-border py-5">
              <div>
                <span className="text-[0.7rem] tracking-[0.15em] text-farm-gold">
                  SOCIAL
                </span>

                <h4 className="my-3 font-editorial text-2xl text-farm-cream">
                  Instagram
                </h4>

                <p className="mb-4 text-[0.9rem] text-farm-stone">
                  Follow Soans Farm for updates from the Farm.
                </p>

                <a
                  href="https://www.instagram.com/soansFarm?xtok=MXZkOGx0bHN1MHQ1NQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-wide text-farm-gold hover:text-farm-cream"
                >
                  @soansFarm ↗
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="border-t border-farm-border py-5">
              <div>
                <span className="text-[0.7rem] tracking-[0.15em] text-farm-gold">
                  ENQUIRIES
                </span>

                <h4 className="my-3 font-editorial text-2xl text-farm-cream">
                  Get in Touch
                </h4>

                <p className="mb-4 text-[0.9rem] text-farm-stone">
                  Contact us for enquiries and further information.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="tel:9449836361"
                    className="text-[0.95rem] text-farm-cream hover:text-farm-gold"
                  >
                    +91 94498 36361
                  </a>

                  <a
                    href="tel:9902331561"
                    className="text-[0.95rem] text-farm-cream hover:text-farm-gold"
                  >
                    +91 99023 31561
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="border-t border-farm-border py-5">
              <div>
                <span className="text-[0.7rem] tracking-[0.15em] text-farm-gold">
                  LOCATION
                </span>

                <h4 className="my-3 font-editorial text-2xl text-farm-cream">
                  Soans Farm
                </h4>

                <p className="mb-4 text-[0.9rem] text-farm-stone">
                  Moodbidri, Karnataka, India
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Soans+Farm+Moodbidri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-farm-gold hover:text-farm-cream"
                >
                  Get Directions ↗
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div
            className="mt-12 w-full overflow-hidden rounded-lg border border-white/10 bg-farm-surface"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.004856101571!2d75.00020590000001!3d13.098878600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb5532d0a50835%3A0x4fca633a88c45486!2sSoans%20Farm!5e0!3m2!1sen!2sin!4v1791568059436!5m2!1sen!2sin"
              title="Find Soans Farm on Google Maps"
              width="100%"
              height="420"
              className="block border-0 grayscale"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
