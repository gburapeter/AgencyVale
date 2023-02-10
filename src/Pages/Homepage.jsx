import React, { useState } from "react";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import logo from '../assets/images/logo.png'
export default function IndexPage() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
    return (
        <>
       

<ScrollContainer className="w-full h-full  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900 to-violet-500">
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
    <img src={logo} alt="Logo" />
    </Animator>
  </ScrollPage>
  {/* <ScrollPage>
    <Animator animation={ZoomInScrollOut}>
      <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
    </Animator>
  </ScrollPage> */}
  <ScrollPage>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
                <Animator animation={Move(-1000, 0, 1000, 0)}>
                  <span class="text-white">Hello Guys </span></Animator>
                  <Animator animation={Move(1000, 0, 1000, 0)}>
                  <span class="text-white">Hello Guys </span></Animator>
                  <Animator animation={Move(-1000, 0, 0, 1000)}>
                  <span class="text-white">Hello Guys </span></Animator>
      
      </span>
    </div>
  </ScrollPage>
  {/* <ScrollPage>
    <Animator animation={batch(Fade(), Sticky())}>
      <span style={{ fontSize: "40px" }}>Done</span>
      <br/>
      <span style={{ fontSize: "30px" }}>
        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
      </span>
    </Animator>
  </ScrollPage> */}
</ScrollContainer>
        </>
    );
}
