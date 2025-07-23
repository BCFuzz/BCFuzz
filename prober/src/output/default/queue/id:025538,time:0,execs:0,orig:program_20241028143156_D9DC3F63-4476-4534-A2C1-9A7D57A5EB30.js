const v2 = new SharedArrayBuffer(48181);
const v4 = new DataView(v2);
const v5 = v4.setInt32();
for (let i8 = 0, i9 = 10; i9; i9--) {
}
const v18 = new BigInt64Array(2558);
createGlobalObject().Atomics.notify(v18, Date, v5);
gc();
