const v1 = new Int16Array();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Float32Array(v1.buffer);
    v6.set(v1);
}
new F2();
gc();
