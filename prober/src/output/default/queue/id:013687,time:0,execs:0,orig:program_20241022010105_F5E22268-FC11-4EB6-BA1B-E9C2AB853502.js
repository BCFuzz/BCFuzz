function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = new Uint16Array(a3, a3, a4);
    v5.buffer.transferToFixedLength();
    new Map(v5);
}
try { new F1(F1, F1); } catch (e) {}
gc();
