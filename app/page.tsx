import Image from "next/image";
import Lanyard from "./component/Lanyard/Lanyard";

export default function Home() {
return (
  <div className="min-h-screen overflow-x-hidden">
    <div className="container border mx-auto h-screen">
      
        <div className="col-span-6">
          <div className="min-h-screen flex justify-end items-center">
      <Lanyard position={[0, 10, 20]} gravity={[0, -40, 0]} />
    </div>
        </div>
      </div>
    </div>
)
}
