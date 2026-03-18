import CardPanel from "@/components/CardPanel";
import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";

export default function Car(){
    return(
        <main className="text-center p-5">
            <h1 className="text-xl font-medium" >Select Your Dream Venue</h1>
            <VenueCatalog venueJson={getVenues()}/>
        </main>
        
    );
}