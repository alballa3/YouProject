import Layout from "@/components/layout";
import Header from "@/components/layout/header";
import Navbar from "@/components/layout/navbar";
import AboutUs from "@/components/pages/index/aboutus";
import ContactUs from "@/components/pages/index/contactus";
import HeroSection from "@/components/pages/index/hero";
import WhatWeOffer from "@/components/pages/index/offer";
import LatestProducts from "@/components/pages/product/product";
import { Button } from "@/components/ui/button";

function Home() {
    return (
        <Layout>
            <HeroSection />
            <WhatWeOffer />
            <LatestProducts />
            <AboutUs />
            <ContactUs />
        </Layout>
    );
}

export default Home;
