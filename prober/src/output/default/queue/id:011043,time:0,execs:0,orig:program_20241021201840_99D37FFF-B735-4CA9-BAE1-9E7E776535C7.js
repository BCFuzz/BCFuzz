function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = [1073741824,-26526];
    const o6 = {
    };
    const v8 = new Proxy(v5, o6);
    Reflect.construct(Uint8Array, [v8]);
}
new F1(F1, F1);
gc();
