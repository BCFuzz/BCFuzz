const o2 = {
    "maxByteLength": 536870889,
};
const v4 = new ArrayBuffer(128, o2);
const v6 = new BigUint64Array(v4);
const v8 = ([536870889,536870889,536870889,536870889,536870889]).includes(v6, 536870889);
for (let i12 = 0, i13 = 10 + 10; i13--, i12 < i13;) {
    const v21 = createGlobalObject();
    v21.Atomics.sub(v6, v21, v8);
}
gc();
