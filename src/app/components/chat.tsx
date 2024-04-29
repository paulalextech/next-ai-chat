'use client';

import { useChat } from 'ai/react';
import { useRef, useEffect } from 'react';

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();
	const chatParent = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const domNode = chatParent.current;
		if (domNode) {
			domNode.scrollTop = domNode.scrollHeight;
		}
	});

	return (
		<main className="flex flex-col w-full h-screen max-h-dvh bg-background">
			<header className="p-4 border-b w-full max-w-3xl mx-auto">
				<h1 className="text-2xl font-bold">Ask Me Anything AI</h1>
			</header>

			<section className="p-4">
				<form
					onSubmit={handleSubmit}
					className="flex w-full max-w-3xl mx-auto items-center"
				>
					<input
						className="flex-1 min-h-[40px] text-black rounded-md p-1"
						placeholder="Type your question here..."
						type="text"
						value={input}
						onChange={handleInputChange}
					/>

					<button className=" ml-1 p-2 bg-orange-500 rounded-md" type="submit">
						Send
					</button>
				</form>
			</section>

			<section className="container px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl">
				<div>
					<ul>
						{messages.map((m, index) => (
							<li key={index}>
								{m.role === 'user' ? 'User: ' : 'AI: '}
								{m.content}
							</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	);
}
