function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = new Float32Array();
    v4.buffer.transfer();
    try { new Uint32Array(v4); } catch (e) {}
}
new F0();
gc();
