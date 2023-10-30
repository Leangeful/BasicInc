onmessage = ({ data: { data, msg } }) => {
	console.debug(msg, data);

	if (msg == 'start') {
		console.debug('Starting worker');
		const ts: number = data.value ?? 1000;
		setInterval(() => {
			postMessage({ msg: 'tick' });
		}, ts);
	}
};

export {};
