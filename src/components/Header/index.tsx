import { BigHead } from "@bigheads/core";
export function Header() {
	return (
		<header className="w-full mt-8">
			<div className="flex items-center justify-center xl:justify-start">
				<div className="flex flex-col items-center  xl:items-stretch xl:flex-row">
					<div className="xl:ml-8 w-32 h-auto bg">
						<BigHead skinTone="light" accessory="none" body="chest" circleColor="blue" clothing="tankTop" clothingColor="red" eyes="happy" hair="short" hat="none" mouth="tongue" hairColor="black" eyebrows="raised" lipColor="turqoise" facialHair="none" graphic="none"  />
					</div>
					<div className="bg-green items-end flex">
						<h2 className="text-center px-3 pt-3 text-2xl xl:px-0 xl:pt-0">Hi <span className={false ? "blur-sm" : ""}>Gui</span>, <span className="font-normal ">Welcome back</span></h2> 
					</div>
				</div>
			</div>
		</header>
	); 
}