function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = [1073741824,-26526];
    const o6 = {
    };
    const v8 = new Proxy(v5, o6);
    v8.toReversed();
    const v10 = [-536870912,10000,10,-4294967295,10,-9223372036854775807];
    v10.fill(1015);
    Array(v10[2])["toReversed"]();
}
const v17 = new F1(F1, F1);
new F1(v17, v17);
gc();
