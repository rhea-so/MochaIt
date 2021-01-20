export default function mochaIt(func: (done: Function) => Promise<void>, timeout?: number) {
	return function (finish: Function) {
		if (this) {
			if (timeout) {
				this.timeout(timeout);
			} else {
				this.timeout(1000);
			}
		}

		async function task() {
			await func(finish);
		}

		task().catch(err => {
			finish(err);
		});
	}
}