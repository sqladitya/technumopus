import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import {
  Section,
  FourColumnGrid,
  ThreeColumnGrid,
  TwoColumnGrid,
} from "@/components/ContentSections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-white">
      <Navigation />

      <HeroSection />

      {/* Services Section - White background with 4-column grid */}
      <Section className="bg-white" id="services">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-technum-text-dark mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-technum-text-medium max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your
            business growth
          </p>
        </div>
        <FourColumnGrid />
      </Section>

      {/* About Section - Light purple background with 3-column grid */}
      <Section className="bg-technum-bg-light-purple" id="about">
        <ThreeColumnGrid />
      </Section>

      {/* Features Section - White background with 2-column and 4-column grids */}
      <Section className="bg-white">
        <TwoColumnGrid />
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-technum-text-dark mb-4">
              Our Process
            </h2>
            <p className="text-xl text-technum-text-medium max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-technum-text-dark mb-2">
                Discovery
              </h3>
              <p className="text-technum-text-medium">
                Understanding your vision and requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-technum-text-dark mb-2">
                Planning
              </h3>
              <p className="text-technum-text-medium">
                Creating detailed roadmaps and strategies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-technum-text-dark mb-2">
                Development
              </h3>
              <p className="text-technum-text-medium">
                Building solutions with cutting-edge technology
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-technum-text-dark mb-2">
                Delivery
              </h3>
              <p className="text-technum-text-medium">
                Launching and supporting your success
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Partners Section - Light purple background with 2-column grid */}
      <Section className="bg-technum-bg-light-purple" id="partners">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-technum-text-dark mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-technum-text-medium max-w-2xl mx-auto mb-12">
            We partner with forward-thinking companies to drive innovation and
            achieve remarkable results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-technum-text-dark mb-6">
              Success Stories
            </h3>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-technum-text-dark mb-2">
                      Acme Corporation
                    </h4>
                    <p className="text-technum-text-medium text-sm">
                      "Technum Opus transformed our digital presence, resulting
                      in a 300% increase in online engagement."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-technum-text-dark mb-2">
                      Beta Industries
                    </h4>
                    <p className="text-technum-text-medium text-sm">
                      "Their innovative approach to mobile development exceeded
                      our expectations and delivered exceptional ROI."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-3xl font-bold text-technum-purple mb-2">
                150+
              </div>
              <div className="text-technum-text-medium">Projects Completed</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-3xl font-bold text-technum-purple mb-2">
                98%
              </div>
              <div className="text-technum-text-medium">
                Client Satisfaction
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-3xl font-bold text-technum-purple mb-2">
                50+
              </div>
              <div className="text-technum-text-medium">
                Expert Team Members
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-3xl font-bold text-technum-purple mb-2">
                24/7
              </div>
              <div className="text-technum-text-medium">Support Available</div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
