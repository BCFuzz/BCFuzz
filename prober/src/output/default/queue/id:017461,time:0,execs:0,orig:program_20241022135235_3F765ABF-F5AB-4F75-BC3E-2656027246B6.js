function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = new Uint16Array();
    v5.buffer.transferToFixedLength(F1, v5, Uint16Array, v5);
    new Float64Array(v5);
}
try { new F1(Uint16Array, F1); } catch (e) {}
gc();
