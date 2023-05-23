"use client";

import { FunctionComponent } from "react";
import { MainMenu } from "./common";
import { Wrapper } from "@/components";
import { cn } from "@/utils/cn";

export const Navbar: FunctionComponent = () => {
  return (
    <header
      className={cn("sticky inset-x-0 top-0 h-20 bg-bg-secondary shadow", "flex items-center")}
    >
      <Wrapper>
        <div className="flex items-center justify-between">
          <h1>Alvaro Aguirre</h1>
          <MainMenu />
        </div>
      </Wrapper>
    </header>
  );
};
