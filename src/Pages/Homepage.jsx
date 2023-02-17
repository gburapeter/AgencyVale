import React, { useState } from "react";
import {
	Animator,
	ScrollContainer,
	ScrollPage,
	batch,
	Fade,
	FadeIn,
	FadeOut,
	Move,
	MoveIn,
	MoveOut,
	Sticky,
	StickyIn,
	StickyOut,
	Zoom,
	ZoomIn,
	ZoomOut,
} from "react-scroll-motion";
import logo from "../assets/images/logo.png";
import MovingText from "react-moving-text";
export default function IndexPage() {
	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
	const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const FadeUp = batch(Fade(), Move(), Sticky());

	return (
		<>
			<ScrollContainer className="transition ease-in-out scroll-smooth bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-600 to-slate-900">
				<ScrollPage>
					<Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
						{/* <img src={logo} alt="Logo" /> */}
						<span style={{ fontSize: "120px" }} class="w-full text-white">
									AGENCY
						</span>
						{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="white" class="w-8 h-8 animate-bounce">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg> */}


					</Animator>
				</ScrollPage>

				<ScrollPage className="transition ease-in-out w-full h-screen grid place-items-center">
					<div class="grid grid-cols-10 place-items-center gap-x-8 gap-y-4">
						{/* FIRST ROW REAL */}
						<div class="col-start-2 col-span-2 ">
							<Animator
								animation={Move(
									getRandomArbitrary(-3000, 3000),
									getRandomArbitrary(-3000, 3000),
									1000,
									0
								)}
							>
								<span style={{ fontSize: "40px" }} class=" text-white">
									SUBTRONI
								</span>
							</Animator>
						</div>
						<div class="col-span-2 ">
							<Animator
								animation={Move(
									getRandomArbitrary(-3000, 3000),
									getRandomArbitrary(-3000, 3000),
									1000,
									0
								)}
							>
								<span style={{ fontSize: "40px" }} class=" text-white">
									ABLAZE
								</span>
							</Animator>
						</div>
						<div class="col-span-2 ">
							<Animator
								animation={Move(
									getRandomArbitrary(-3000, 3000),
									getRandomArbitrary(-3000, 3000),
									1000,
									0
								)}
							>
								<span style={{ fontSize: "40px" }} class=" text-white">
									NEXTARS
								</span>
							</Animator>
						</div>
						<div class="col-span-2 ">
							<Animator
								animation={Move(
									getRandomArbitrary(-3000, 3000),
									getRandomArbitrary(-3000, 3000),
									1000,
									0
								)}
							>
								<span style={{ fontSize: "40px" }} class=" text-white">
									ABLAZE
								</span>
							</Animator>
						</div>

						{/* ASD */}
						{/* FIRST ROW  */}
						<div class="col-span-2">
							<Animator
								animation={Move(
									getRandomArbitrary(-3000, 3000),
									getRandomArbitrary(-3000, 3000),
									1000,
									0
								)}
							>
								<span style={{ fontSize: "40px" }} class=" text-white">
									AUTOMHATE
								</span>
							</Animator>
						</div>
						<div class="col-span-2 ">
							<Animator
								animation={Move(
									getRandomArbitrary(-3000, 3000),
									getRandomArbitrary(-3000, 3000),
									1000,
									0
								)}
							>
								<span style={{ fontSize: "40px" }} class=" text-white">
									PETER
								</span>
							</Animator>
						</div>
						<div class="col-span-2 ">
							<Animator
								animation={Move(
									getRandomArbitrary(-3000, 3000),
									getRandomArbitrary(-3000, 3000),
									1000,
									0
								)}
							>
								<span style={{ fontSize: "40px" }} class=" text-white">
									GANGS
								</span>
							</Animator>
						</div>
						<div class="col-span-2 ">
							<Animator
								animation={Move(
									getRandomArbitrary(-3000, 3000),
									getRandomArbitrary(-3000, 3000),
									1000,
									0
								)}
							>
								<span style={{ fontSize: "40px" }} class=" text-white">
									VALE
								</span>
							</Animator>
						</div>
						<div class="col-span-2 ">
							<Animator
								animation={Move(
									getRandomArbitrary(-3000, 3000),
									getRandomArbitrary(-3000, 3000),
									1000,
									0
								)}
							>
								<span style={{ fontSize: "40px" }} class=" text-white">
									ABLAZE
								</span>
							</Animator>
						</div>

						{/* sec row end */}

						{/* 3rd */}
						<div class="col-start-2 col-span-2 ">
							<Animator
								animation={Move(
									getRandomArbitrary(-3000, 3000),
									getRandomArbitrary(-3000, 3000),
									1000,
									0
								)}
							>
								<span style={{ fontSize: "40px" }} class=" text-white">
									SUBTRONI
								</span>
							</Animator>
						</div>
						<div class="col-span-2 ">
							<Animator
								animation={Move(
									getRandomArbitrary(-3000, 3000),
									getRandomArbitrary(-3000, 3000),
									1000,
									0
								)}
							>
								<span style={{ fontSize: "40px" }} class=" text-white">
									ABLAZE
								</span>
							</Animator>
						</div>
						<div class="col-span-2 ">
							<Animator
								animation={Move(
									getRandomArbitrary(-3000, 3000),
									getRandomArbitrary(-3000, 3000),
									1000,
									0
								)}
							>
								<span style={{ fontSize: "40px" }} class=" text-white">
									NEXTARS
								</span>
							</Animator>
						</div>
						<div class="col-span-2 ">
							<Animator
								animation={Move(
									getRandomArbitrary(-3000, 3000),
									getRandomArbitrary(-3000, 3000),
									1000,
									0
								)}
							>
								<span style={{ fontSize: "40px" }} class=" text-white">
									ABLAZE
								</span>
							</Animator>
						</div>

						{/* 3rd */}

						{/* 4th */}
						<div class="col-start-5 col-span-2 ">
							<Animator
								animation={Move(
									getRandomArbitrary(-3000, 3000),
									getRandomArbitrary(-3000, 3000),
									1000,
									0
								)}
							>
								<span style={{ fontSize: "40px" }} class=" text-white">
									ABLAZE
								</span>
							</Animator>
						</div>
					</div>
				</ScrollPage>

				{/* <ScrollPage >
   
           
              
							<div className="flex items-center justify-center h-screen w-full  space-x-10">
              <Animator animation={Move(-2000, 0, 1000, 0)}>
                <span style={{ fontSize: "60px" }} class=" text-white"> AUTOMHATE</span></Animator>
							
						
              <Animator animation={Move(1000, 0, 1000, 0)}>
                <span style={{ fontSize: "60px" }} class=" text-white"> ENZOE</span></Animator>
                <Animator animation={Move(0, 1000, 1000, 0)}>
              <span style={{ fontSize: "60px" }} class=" text-white"> PETER</span></Animator>
            
              <Animator animation={Move(-1000, 0, 1000, 0)}>
                <span style={{ fontSize: "60px" }} class=" text-white"> SUBTRONICS</span></Animator>
						
              <Animator animation={Move(-1000, 0, 1000, 0)}>
                <span style={{ fontSize: "60px" }} class=" text-white"> VALE</span></Animator>
                </div>
					
  </ScrollPage> */}
			</ScrollContainer>
		</>
	);
}
