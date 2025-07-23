function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = [1073741824,-26526];
    const o5 = {
    };
    const v7 = new Proxy(v4, o5);
    const v8 = v7.toReversed();
    let v9;
    try { v9 = v8.flatMap(F0); } catch (e) {}
    const v11 = new ArrayBuffer();
    new Uint8Array(v11, Uint8Array, v9);
}
new F0();
gc();
