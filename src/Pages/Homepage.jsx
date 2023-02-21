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
import { Artist } from "../Components/Artist";
import Contact from "./Contact";
export default function IndexPage() {
	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
	const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
	const FadeUp = batch(Fade(), Move(), Sticky());

	const artists = [
		{
			name: "Automhate",
			socials: {
				Spotify: "https://spotify.com/jaketrent",

				Facebook: "https://facebook.com/jaketrent",
				SoundCloud: "https://soundcloud.com/jaketrent",
				Instagram: "https://instagram.com/jaketrent",
			},
		},

		{
			name: "Adrian",
			socials: {
				Spotify: "https://spotify.com/jaketrent",

				Facebook: "https://facebook.com/jaketrent",
				SoundCloud: "https://soundcloud.com/jaketrent",
				Instagram: "https://instagram.com/jaketrent",
			},
		},
		{
			name: "Adrian",
			socials: {
				Spotify: "https://spotify.com/jaketrent",

				Facebook: "https://facebook.com/jaketrent",
				SoundCloud: "https://soundcloud.com/jaketrent",
				Instagram: "https://instagram.com/jaketrent",
			},
		},
		{
			name: "Adrian",
			socials: {
				Spotify: "https://spotify.com/jaketrent",

				Facebook: "https://facebook.com/jaketrent",
				SoundCloud: "https://soundcloud.com/jaketrent",
				Instagram: "https://instagram.com/jaketrent",
			},
		},
		{
			name: "Adrian",
			socials: {
				Spotify: "https://spotify.com/jaketrent",

				Facebook: "https://facebook.com/jaketrent",
				SoundCloud: "https://soundcloud.com/jaketrent",
				Instagram: "https://instagram.com/jaketrent",
			},
		},
		{
			name: "Adrian",
			socials: {
				Spotify: "https://spotify.com/jaketrent",

				Facebook: "https://facebook.com/jaketrent",
				SoundCloud: "https://soundcloud.com/jaketrent",
				Instagram: "https://instagram.com/jaketrent",
			},
		},
		{
			name: "Adrian",
			socials: {
				Spotify: "https://spotify.com/jaketrent",

				Facebook: "https://facebook.com/jaketrent",
				SoundCloud: "https://soundcloud.com/jaketrent",
				Instagram: "https://instagram.com/jaketrent",
			},
		},
		{
			name: "Adrian",
			socials: {
				Spotify: "https://spotify.com/jaketrent",

				Facebook: "https://facebook.com/jaketrent",
				SoundCloud: "https://soundcloud.com/jaketrent",
				Instagram: "https://instagram.com/jaketrent",
			},
		},
		{
			name: "Adrian",
			socials: {
				Spotify: "https://spotify.com/jaketrent",

				Facebook: "https://facebook.com/jaketrent",
				SoundCloud: "https://soundcloud.com/jaketrent",
				Instagram: "https://instagram.com/jaketrent",
			},
		},
		{
			name: "Adrian",
			socials: {
				Spotify: "https://spotify.com/jaketrent",

				Facebook: "https://facebook.com/jaketrent",
				SoundCloud: "https://soundcloud.com/jaketrent",
				Instagram: "https://instagram.com/jaketrent",
			},
		},
		{
			name: "Adrian",
			socials: {
				Spotify: "https://spotify.com/jaketrent",

				Facebook: "https://facebook.com/jaketrent",
				SoundCloud: "https://soundcloud.com/jaketrent",
				Instagram: "https://instagram.com/jaketrent",
			},
		},
		{
			name: "Adrian",
			socials: {
				Spotify: "https://spotify.com/jaketrent",

				Facebook: "https://facebook.com/jaketrent",
				SoundCloud: "https://soundcloud.com/jaketrent",
				Instagram: "https://instagram.com/jaketrent",
			},
		},
		{
			name: "Adrian",
			socials: {
				Spotify: "https://spotify.com/jaketrent",

				Facebook: "https://facebook.com/jaketrent",
				SoundCloud: "https://soundcloud.com/jaketrent",
				Instagram: "https://instagram.com/jaketrent",
			},
		},
		{
			name: "Adrian",
			socials: {
				Spotify: "https://spotify.com/jaketrent",

				Facebook: "https://facebook.com/jaketrent",
				SoundCloud: "https://soundcloud.com/jaketrent",
				Instagram: "https://instagram.com/jaketrent",
			},
		},
		{
			name: "Subtronics",
			socials: {
				Spotify: "https://spotify.com/jaketrent",

				Facebook: "https://facebook.com/jaketrent",
				SoundCloud: "https://soundcloud.com/jaketrent",
				Instagram: "https://instagram.com/jaketrent",
			},
		},
	];

	return (
		<>
			<ScrollContainer className="transition ease-in-out scroll-smooth bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-600 to-slate-900">
				<ScrollPage>
					<Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
						<div className="flex flex-col items-center align-center h-screen w-full">
							<div class="flex-1 h-3/4 ">
								<img class="object-scale-down" src={logo} alt="Logo" />
							</div>

							<div className="mt-auto">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2.5"
									stroke="white"
									class="w-8 h-8 animate-bounce"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</div>
						</div>
					</Animator>
				</ScrollPage>

				<ScrollPage className="py-40 transition ease-in-out w-full h-screen grid place-items-center">
					<Animator className="w-full " animation={FadeUp}>
						<div class="grid grid-cols-10 place-items-center gap-x-8 gap-y-4">
							{/* FIRST ROW REAL */}

							<div class="col-start-2 col-span-2 ">
								<Artist
									socials={artists[0].socials}
									name={artists[0].name}
								/>
							</div>
							<div class="col-span-2 ">
								<Artist
									socials={artists[1].socials}
									name={artists[1].name}
								/>
							</div>
							<div class="col-span-2 ">
								<Artist
									socials={artists[2].socials}
									name={artists[2].name}
								/>
							</div>
							<div class="col-span-2 ">
								<Artist
									socials={artists[3].socials}
									name={artists[3].name}
								/>
							</div>

							{/* SECOND ROW  */}
							<div class="col-span-2">
								<Artist
									socials={artists[4].socials}
									name={artists[4].name}
								/>
							</div>
							<div class="col-span-2 ">
								<Artist
									socials={artists[5].socials}
									name={artists[5].name}
								/>
							</div>
							<div class="col-span-2 ">
								<Artist
									socials={artists[6].socials}
									name={artists[6].name}
								/>
							</div>
							<div class="col-span-2 ">
								<Artist
									socials={artists[7].socials}
									name={artists[7].name}
								/>
							</div>
							<div class="col-span-2 ">
								<Artist
									socials={artists[8].socials}
									name={artists[8].name}
								/>
							</div>

							{/* sec row end */}

							{/* 3rd */}
							<div class="col-start-2 col-span-2 ">
								<Artist
									socials={artists[9].socials}
									name={artists[9].name}
								/>
							</div>
							<div class="col-span-2 ">
								<Artist
									socials={artists[10].socials}
									name={artists[10].name}
								/>
							</div>
							<div class="col-span-2 ">
								<Artist
									socials={artists[11].socials}
									name={artists[11].name}
								/>
							</div>
							<div class="col-span-2 ">
								<Artist
									socials={artists[12].socials}
									name={artists[12].name}
								/>
							</div>

							{/* 3rd */}

							{/* 4th */}
							<div class="col-start-3 col-span-2 ">
								<Artist
									socials={artists[13].socials}
									name={artists[13].name}
								/>
							</div>
							<div class="col-start-7 col-span-2 ">
								<Artist
									socials={artists[14].socials}
									name={artists[14].name}
								/>
							</div>

							<div class="mt-auto col-start-5 col-span-2 ">
								<div className="">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="2.5"
										stroke="white"
										class="w-8 h-8 animate-bounce"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M19.5 8.25l-7.5 7.5-7.5-7.5"
										/>
									</svg>
								</div>
							</div>
						</div>
					</Animator>
				</ScrollPage>
				<ScrollPage>
					<Animator
						className="transition ease-in-out w-full h-screen grid place-items-center"
						animation={FadeUp}
					>
						<Contact />
					</Animator>
				</ScrollPage>
			</ScrollContainer>
		</>
	);
}
