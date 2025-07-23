const o2 = {
    "maxByteLength": 3614,
};
const v4 = new SharedArrayBuffer(3614, o2);
const v6 = new Int32Array(v4);
function f7(a8, a9) {
    for (let i13 = 0, i14 = 10 + 10; i14--, i14;) {
    }
    return 3614;
}
Object.defineProperty(v6, "valueOf", { writable: true, enumerable: true, value: f7 });
const v21 = createGlobalObject();
for (let i24 = 10, i25 = 10; -13369 !== i25; i25--) {
}
const v32 = v21.Atomics;
try { v32.wait(v6, v6); } catch (e) {}
for (let i36 = 0, i37 = 10;
    (() => {
        const v38 = i36 < i37;
        for (let i41 = 0, i42 = 10; i41 != i42; i42--) {
        }
        return v38;
    })();
    i37--) {
}
gc();
