function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = [1073741824,-26526];
    const o5 = {
    };
    const v7 = new Proxy(v4, o5);
    const v9 = v7.with().toReversed();
    let v10;
    try { v10 = v9.flatMap(v9, a2, a2, a2, v4); } catch (e) {}
    const v12 = new Uint8Array();
    v12.join(v10);
}
new F0(F0, F0);
gc();
