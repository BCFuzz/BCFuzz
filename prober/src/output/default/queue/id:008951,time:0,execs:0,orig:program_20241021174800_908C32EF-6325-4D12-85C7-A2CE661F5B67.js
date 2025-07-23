function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const o4 = {
        "maxByteLength": 536870887,
    };
    const v6 = new SharedArrayBuffer(129, o4);
    const v8 = new DataView(v6, DataView, DataView);
    try { v8.setUint16(v8, F0); } catch (e) {}
}
new F0();
gc();
