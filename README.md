# Mocha.it

NodeJS Mocha it에서 비동기 함수를 실행하기 편하도록 도와주는 함수

## Usage

```typescript
import mochaIt from '../index';

// 최대 1초까지 기다림
it('Run Basic', mochaIt(async (done) => {
	done();
}));

// 뒤 인자로 Timeout을 지정해줄 수 있음
it('Timeout', mochaIt(async (done) => {
	done();
}, 5000));

// 예외 발생시 바로 테스트가 멈춤
it('Exception', mochaIt(async (done) => {
	throw new Error('1 + 1 != 3');
}));
```

## Support Git History

### Credits

Based on these amazing projects:

* rhea by [JeongHyeon Kim](https://github.com/rhea-so)

### License

none