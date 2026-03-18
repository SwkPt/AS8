import Image from "next/image";
import getVenue from "@/libs/getVenue";
export default async function VenueDetailPage({params}:{params: {vid:string}}) {

    const venueDetail = await getVenue(params.vid)

    return(
        <main className="text-left p-5" >
            <div className="flex flex-row my-5 justify-center items-center" >
                <Image src={ venueDetail.data.picture } 
                alt="venue image" width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="">
                    <div className="text-md mx-5 " >Name: {venueDetail.data.name}</div>
                    <div className="text-md mx-5 " >Address: {venueDetail.data.address}</div>
                    <div className="text-md mx-5" >District: {venueDetail.data.district}</div>
                    <div className="text-md mx-5" >Province: {venueDetail.data.province}</div>
                    <div className="text-md mx-5" >Postal Code: {venueDetail.data.postalcode}</div>
                    <div className="text-md mx-5" >Phone: {venueDetail.data.tel}</div>
                    <div className="text-md mx-5" >Daily Rate: ฿{venueDetail.data.dailyrate}</div>
                </div>
            </div>
        </main>
    );
    
}
/*
export async function generateStaticParams() {
    return [{vid:'67d044e0c0062950a985c509'},{vid:'67d04663c0062950a985c50c'},{vid:'67d047cec0062950a985c50f'}]
}*/