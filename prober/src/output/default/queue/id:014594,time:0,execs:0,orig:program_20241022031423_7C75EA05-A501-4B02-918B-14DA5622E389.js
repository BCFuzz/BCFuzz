function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = new Uint16Array();
    v5.buffer.transferToFixedLength();
    new Int32Array(v5);
}
try { new F1(); } catch (e) {}
gc();
