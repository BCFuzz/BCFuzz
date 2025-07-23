const v1 = new Uint8Array();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F2();
v1.fill(Float32Array, v5);
gc();
