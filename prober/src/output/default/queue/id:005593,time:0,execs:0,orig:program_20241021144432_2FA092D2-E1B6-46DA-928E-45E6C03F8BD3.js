function f1() {
    const v3 = new BigUint64Array();
    268435441 in v3;
    const o5 = {
    };
    return o5;
}
f1();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = [1073741824,-26526];
    const o12 = {
    };
    const v14 = new Proxy(v11, o12);
    v14.with().every(f1);
}
new F7(268435441, f1);
gc();
