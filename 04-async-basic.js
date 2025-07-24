export const asyncBasic = () => {
	console.log(`Start`);

	setTimeout(() => {
		console.log(`Wait for 1 second -- I'm back 😎`);
	}, 1000);

// setTimeout(() => console.log(1), 0);
// 	setTimeout(() => console.log(2), 2000);
// 	setTimeout(() => console.log(3), 1000);

	console.log(`End`);
};

asyncBasic();
