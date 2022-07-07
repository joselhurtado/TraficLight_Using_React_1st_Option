import React, { useState, useEffect } from "react";

export const TrafficLight = () => {
	const [color, setColor] = useState("red");
	useEffect(
		() => {
			const interval = setInterval(() => {
				color === "green"
					? setColor("red")
					: color === "yellow"
						? setColor("green")
						: color === "red"
							? setColor("yellow")
							: null;
			}, 5000);
			return () => clearInterval(interval);
		},
		[color]
	);

	return (
		<div className="body lightBox">
			<div className="trafficPole container-sm">
			<div className="protector"></div>
			<div className="protector"></div>
			<div className="protector"></div>
				<div
					className={color === "red" ? "redOn" : "redOff"}
					onClick={() => setColor("red")}
				/>
				<div
					className={color === "yellow" ? "yellowOn" : "yellowOff"}
					onClick={() => setColor("yellow")}
				/>
				<div
					className={color === "green" ? "greenOn" : "greenOff"}
					onClick={() => setColor("green")}
				/>
			</div>
		</div>
	);
};