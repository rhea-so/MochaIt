import mochaIt from '../index';

it('Run Basic', mochaIt(async (done) => {
	done();
}));

it('Timeout', mochaIt(async (done) => {
	done();
}, 5000));

it('Exception Test', function (done) {
	mochaIt(async (_done) => {
		throw new Error('Hi');
	})((_err: Error) => {
		done();
	});
});