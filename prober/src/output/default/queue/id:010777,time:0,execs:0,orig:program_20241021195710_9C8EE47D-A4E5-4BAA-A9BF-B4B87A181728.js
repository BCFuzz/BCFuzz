function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = (-9223372036854775807).__proto__;
    const o5 = {
    };
    const v7 = new Proxy(v4, o5);
    try { v7.toPrecision(); } catch (e) {}
}
new F0();
gc();
