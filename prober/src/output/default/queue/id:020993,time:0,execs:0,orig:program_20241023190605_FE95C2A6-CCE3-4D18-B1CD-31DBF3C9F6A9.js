function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = new Uint8Array(a2, a3);
    v5.buffer.transferToFixedLength(F0, a2, F0, F0);
    delete v5[9];
}
new F0(F0, F0);
gc();
