import Image from "next/image";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import CardPanel from "@/components/CardPanel";
import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";


export default function Home() {
  return (
    <div>
      <main className='w-full'>
        <Banner/>
        <VenueCatalog venueJson={getVenues()} />
        </main>
      </div>
  );
}
