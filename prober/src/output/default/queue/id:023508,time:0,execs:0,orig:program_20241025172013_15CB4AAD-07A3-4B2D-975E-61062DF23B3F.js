function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = new Float32Array();
    v3.buffer.transfer();
    try { new Int16Array(v3); } catch (e) {}
}
new F0();
gc();
