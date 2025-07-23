const o2 = {
    "maxByteLength": 1024,
};
const v4 = new SharedArrayBuffer(1024, o2);
const v6 = new Int32Array(v4);
function f7() {
    for (const v8 in v6) {
    }
    return o2;
}
class C9 extends f7 {
}
new C9();
gc();
