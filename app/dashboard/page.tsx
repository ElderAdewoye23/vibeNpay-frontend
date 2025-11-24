import CreatorCards from "@/components/local/CreatorCards"
import GetStarted from "@/components/local/GetStarted"
import Hero from "@/components/local/Hero"
import Navbar from "@/components/local/Navbar"
import Partner from "@/components/local/Partner"
import Platform from "@/components/local/Platform"
import HighlightPlatform from "@/components/local/HighlightPlatform"


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
</div>
        </div>
    )
}

export default DashboardPage