const o3 = {
    "maxByteLength": 3614,
};
function f4() {
    return -10n;
}
Object.defineProperty(o3, "toString", { writable: true, value: f4 });
const v6 = new SharedArrayBuffer(3614, o3);
const v8 = new Int32Array(v6);
const v10 = createGlobalObject();
for (let i13 = 10, i14 = 10; -13369 !== i14; i14--) {
}
const v21 = v10.Atomics;
try { v21.wait(v8, v8, o3); } catch (e) {}
for (let i25 = 0, i26 = 10;
    (() => {
        const v27 = i25 < i26;
        for (let i30 = 0, i31 = 10; i30 != i31; i31--) {
        }
        return v27;
    })();
    i26--) {
}
gc();
