function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = new Int32Array();
    v4.constructor = BigInt64Array;
    try { v4.slice(F0, F0); } catch (e) {}
}
new F0();
gc();
