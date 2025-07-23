function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4) {
    const o7 = {
        "maxByteLength": 2309574369,
    };
    const v9 = new SharedArrayBuffer(9, o7);
    new Int16Array(v9, 2309574369);
    return 2309574369;
}
v2.constructor = f3;
const v12 = v2.constructor;
try { v12(v2, v12, v2); } catch (e) {}
gc();
