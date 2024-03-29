import React from "react";
import { PancakeStack, PancakeInput, PancakeLabel } from "./StyledPancakeToggle";
import { PancakeToggleProps, scales } from "./types";

const PancakeToggle: React.FC<PancakeToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <PancakeStack scale={scale}>
    <PancakeInput id={props.id || "novo-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <PancakeLabel scale={scale} checked={checked} htmlFor={props.id || "novo-toggle"}>
      <div className="novos">
        <div className="novo" />
        <div className="novo" />
        <div className="novo" />
        <div className="butter" />
      </div>
    </PancakeLabel>
  </PancakeStack>
);

export default PancakeToggle;
