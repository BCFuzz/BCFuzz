const v1 = new WeakSet();
class C2 extends WeakSet {
}
const o5 = {
    "maxByteLength": 3614,
};
const v7 = new SharedArrayBuffer(3614, o5);
const v9 = new Int32Array(v7, v1, C2);
const v11 = createGlobalObject();
for (let i14 = 10, i15 = 10; -13369 !== i15; i15--) {
}
const v22 = v11.Atomics;
try { v22.wait(v9); } catch (e) {}
for (let i26 = 0, i27 = 10;
    (() => {
        const v28 = i26 < i27;
        for (let i31 = 0, i32 = 10; i31 != i32; i32--) {
        }
        return v28;
    })();
    i27--) {
}
gc();
