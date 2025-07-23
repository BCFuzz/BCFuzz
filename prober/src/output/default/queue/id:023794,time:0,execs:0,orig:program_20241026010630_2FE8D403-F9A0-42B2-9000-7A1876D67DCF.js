function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = new Float32Array(this, Float32Array, F0);
    v3.buffer.transfer();
    const v7 = new Int8Array();
    try { v7.set(v3); } catch (e) {}
}
new F0();
gc();
