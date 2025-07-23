class C0 {
}
const v1 = new C0();
const v2 = v1[3];
const v3 = new C0();
function F4() {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F4();
let v9;
try { v9 = Uint32Array.call(v1, 1024, 1024, v3); } catch (e) {}
const v10 = new Uint32Array(1024);
const o12 = {
    [v9]: v2,
    [v3]: v2,
    "maxByteLength": v9,
    [2713]: v6,
    ...v10,
};
gc();
