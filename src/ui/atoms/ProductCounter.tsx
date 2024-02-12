"use client";

import { useState } from "react";

export const ProductCounter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<button className="px-4 border border-slate-200" onClick={() => setCounter((counter) => counter + 1)}>+</button>
			<input className="border border-slate-200" readOnly value={counter} />
			<button className="px-4 border border-slate-200" onClick={() => setCounter((counter) => counter - 1)}>-</button>
		</div>
	);
};
