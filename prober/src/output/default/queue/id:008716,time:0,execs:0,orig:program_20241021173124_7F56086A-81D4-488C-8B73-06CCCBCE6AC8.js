function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = [1073741824,-26526];
    const o6 = {
    };
    const v8 = new Proxy(v5, o6);
    const v9 = v8.with();
    v9.shift();
    const v11 = new Uint8Array(a3);
    v11.subarray(v9, v9);
}
new F1(F1, F1);
gc();
