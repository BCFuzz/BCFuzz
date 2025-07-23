class C0 {
}
const v1 = new C0();
function f2(a3, a4) {
    for (let i7 = 0, i8 = 257; i8--, i7 < i8;) {
    }
    return 257;
}
v1.toString = f2;
const o17 = {
    "maxByteLength": 536870912,
};
const v19 = new SharedArrayBuffer(5, o17);
const v21 = new Uint8Array(v19);
delete v21[v1];
gc();
