function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = new Uint8Array();
    new Uint16Array(v3);
}
new F0();
gc();
