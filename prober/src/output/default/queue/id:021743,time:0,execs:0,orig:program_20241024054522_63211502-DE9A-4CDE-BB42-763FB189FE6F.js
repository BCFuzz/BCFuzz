const v2 = createGlobalObject().Float16Array;
for (let i5 = 0, i6 = 10; i5 != i6; i6--) {
}
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
    function f16() {
        return a15;
    }
    const o20 = {
        "maxByteLength": 416,
    };
    const v22 = new SharedArrayBuffer(116, o20);
    const v23 = new v2(v22);
    Object.defineProperty(v23, 0, { writable: true, enumerable: true, value: f16 });
}
new F13();
gc();
