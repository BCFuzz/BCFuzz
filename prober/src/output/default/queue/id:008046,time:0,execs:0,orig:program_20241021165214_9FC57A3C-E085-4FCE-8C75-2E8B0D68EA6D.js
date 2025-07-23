function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const o4 = {
    };
    function f5() {
        Set(this);
        return o4;
    }
    o4[Symbol.toPrimitive] = f5;
    const v12 = new BigInt64Array();
    try { v12.set(Uint32Array, o4); } catch (e) {}
    for (let i16 = 0, i17 = 10; i17--, i16 < i17;) {
    }
}
new F0(F0, F0);
gc();
