const v2 = new BigInt64Array(2558);
v2.subarray(2558);
class C5 extends Uint8Array {
}
const v6 = new C5();
const v9 = createGlobalObject().Atomics;
v9.exchange(v2, v9, v6);
gc();
