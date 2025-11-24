import CreatorCards from "@/components/local/CreatorCards"
import Hero from "@/components/local/Hero"
import Navbar from "@/components/local/Navbar"
import Partner from "@/components/local/Partner"
import Platform from "@/components/local/Platform"

function DashboardPage () {

    return (
        <div>
<Navbar />
<div className=" ">
    <Hero />
    <CreatorCards />
    <Partner />
    <Platform />
</div>
        </div>
    )
}

export default DashboardPage