import React from "react";
import LogoComponent from "../home_parts/logo_component";
import Mission from "../home_parts/mission";
import Sponsors from "../home_parts/sponsors";
import Team from "../home_parts/team";
import Vison from "../home_parts/vision";


export default function Home() {
  return (
    <div>
      <LogoComponent/>
      <Vison />
      <Mission />
      <Team />
      <Sponsors />
    </div>
  )
}