const v2 = new BigInt64Array(2558);
class C4 extends Uint8Array {
}
const v5 = new C4();
const v8 = createGlobalObject().Atomics;
v8.exchange(v2, v8, v5);
gc();
