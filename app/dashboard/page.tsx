import CreatorCards from "@/components/local/CreatorCards"
import GetStarted from "@/components/local/GetStarted"
import Hero from "@/components/local/Hero"
import Navbar from "@/components/local/Navbar"
import Partner from "@/components/local/Partner"
import Platform from "@/components/local/Platform"
import HighlightPlatform from "@/components/local/HighlightPlatform"
import Faq from "@/components/local/Faq"
import Contact from "@/components/local/Contact"
import Footer from "@/components/local/Footer"


function DashboardPage () {

    return (
        <div>
<Navbar />
<div className=" ">
    <Hero />
    <CreatorCards />
    <Partner />
    <Platform />
    <GetStarted />
    <HighlightPlatform />
    <Faq />
    <Contact />
    <Footer />
</div>
        </div>
    )
}

export default DashboardPage