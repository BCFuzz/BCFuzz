const v2 = new SharedArrayBuffer(1024);
const v4 = new Int32Array(v2);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = new Uint16Array(v2);
    v10.set(v4);
}
new F5();
gc();
