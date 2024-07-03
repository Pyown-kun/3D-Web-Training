/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ᗩᒪE᙭. Kᗩ.🚗 (https://sketchfab.com/Alex.Ka.)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/lamborghini-murcielago-vt-2001-2bb7c28088064b1bbbcf79eb2045a91b
Title: Lamborghini Murciélago VT 2001
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import garageScene from "../asset/3d/Garage.glb";

export function Garage({ isRotating, setIsRotating, ...props }) {
  const garageRef = useRef();

  const { nodes, materials } = useGLTF(garageScene);

  return (
    <a.group ref={garageRef} {...props}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.ARCblackmatte}
      />
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials.ARCblackplastic}
      />
      <mesh geometry={nodes.Object_4.geometry} material={materials.ARClogo} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.ARCmetall} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Ceiling} />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials.Lamborghini_Murcielago_2001_in_Showroom_by_Alex_Ka}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.Red_curtain}
      />
      <mesh geometry={nodes.Object_9.geometry} material={materials.V12__6_2L} />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.black_aluminium}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.black_chrome}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.black_matte}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.black_plastic}
      />
      <mesh geometry={nodes.Object_14.geometry} material={materials.bottom} />
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials.brakedisk}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.brakelight}
      />
      <mesh
        geometry={nodes.Object_17.geometry}
        material={materials.brakelight_mid}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials.carshadow}
      />
      <mesh geometry={nodes.Object_19.geometry} material={materials.chrome} />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.chrome_details}
      />
      <mesh geometry={nodes.Object_21.geometry} material={materials.doorline} />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.emblem_hood}
      />
      <mesh geometry={nodes.Object_23.geometry} material={materials.engine} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.exhaust} />
      <mesh
        geometry={nodes.Object_25.geometry}
        material={materials.exhaust_bronze}
      />
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials.exhaust_matte}
      />
      <mesh geometry={nodes.Object_27.geometry} material={materials.floor} />
      <mesh
        geometry={nodes.Object_28.geometry}
        material={materials.grill_front}
      />
      <mesh
        geometry={nodes.Object_29.geometry}
        material={materials.grill_rear}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials.grill_side_1}
      />
      <mesh
        geometry={nodes.Object_31.geometry}
        material={materials.grill_side_2}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials.headlight_glass}
      />
      <mesh
        geometry={nodes.Object_33.geometry}
        material={materials.headlight_plastic1}
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials.headlight_plastic2}
      />
      <mesh
        geometry={nodes.Object_35.geometry}
        material={materials.hedlight1}
      />
      <mesh
        geometry={nodes.Object_36.geometry}
        material={materials.hedlight2}
      />
      <mesh geometry={nodes.Object_37.geometry} material={materials.material} />
      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials.lamborghini_rear_logo}
      />
      <mesh
        geometry={nodes.Object_39.geometry}
        material={materials.lamborghini_support_logo}
      />
      <mesh geometry={nodes.Object_40.geometry} material={materials.mats} />
      <mesh geometry={nodes.Object_41.geometry} material={materials.mirrors} />
      <mesh
        geometry={nodes.Object_42.geometry}
        material={materials.need_for_speed}
      />
      <mesh geometry={nodes.Object_43.geometry} material={materials.plate_F} />
      <mesh geometry={nodes.Object_44.geometry} material={materials.plate_R} />
      <mesh
        geometry={nodes.Object_45.geometry}
        material={materials.plate_lamps}
      />
      <mesh
        geometry={nodes.Object_46.geometry}
        material={materials.plate_logo}
      />
      <mesh
        geometry={nodes.Object_47.geometry}
        material={materials.plate_red_lamps}
      />
      <mesh
        geometry={nodes.Object_48.geometry}
        material={materials.material_46}
      />
      <mesh geometry={nodes.Object_49.geometry} material={materials.rimbolts} />
      <mesh geometry={nodes.Object_50.geometry} material={materials.rimlogo} />
      <mesh
        geometry={nodes.Object_51.geometry}
        material={materials.side_turn_signals}
      />
      <mesh geometry={nodes.Object_52.geometry} material={materials.suport} />
      <mesh
        geometry={nodes.Object_53.geometry}
        material={materials.susp_matte}
      />
      <mesh
        geometry={nodes.Object_54.geometry}
        material={materials.susp_plastic}
      />
      <mesh
        geometry={nodes.Object_55.geometry}
        material={materials.taillight}
      />
      <mesh geometry={nodes.Object_56.geometry} material={materials.tire} />
      <mesh
        geometry={nodes.Object_57.geometry}
        material={materials.tire_side}
      />
      <mesh
        geometry={nodes.Object_58.geometry}
        material={materials.turn_signals}
      />
      <mesh geometry={nodes.Object_59.geometry} material={materials.windo} />
    </a.group>
  );
}

export default Garage;
