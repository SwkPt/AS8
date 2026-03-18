import ProductCard from "./Card";
import Link from "next/link";
export default async function VenueCatalog({venuesJson}:{venuesJson:Promise<VenueJson>}) {
    const venueJsonReady = await venuesJson
    
    if (!venueJsonReady || !venueJsonReady.data) {
        return <div>No venues available</div>
    }
    
    return (
        <>
        Explore {venueJsonReady.count} venues
        <div>
            <div style={{margin:"20px", display:"flex",flexDirection:"row",flexWrap:"wrap", justifyContent:"space-around",alignContent:"space-around"}}>
                {
                    venueJsonReady.data.map( (venueItem:VenueItem)=>(
                        <Link href={`/venue/${venueItem.id}`}  key={venueItem.id} className="w-1/5" >
                        <ProductCard venueName={venueItem.name} imgSrc={venueItem.picture} />
                        </Link>
                    ) ) 
                }
            </div>
        </div>
        </>
    );
}