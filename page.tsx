import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import profile from "../app/image/doll.jpg.jpg"

export default function Home() {
  return (
    <div className="firstcontainer">
      <Header />
        <div className="footer">
          <Footer />
        </div>
        <div className="picture">
  <Image
  src={profile}
  alt="profile_pic"
  width={500}
  height={200}
  />
</div>
    </div>
    
  );
}