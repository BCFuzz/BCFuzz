const o3 = {
    "maxByteLength": 3614,
};
const v5 = new SharedArrayBuffer(3614, o3);
const v7 = new Int32Array(v5);
const v10 = createGlobalObject().Atomics;
try { v10.wait(v7, v7, o3, -9007199254740992n); } catch (e) {}
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
gc();
