class C1 {
}
const v2 = new C1();
const v4 = [-Infinity,-691832.4173211381,1000000000000.0,NaN,-3.0,1000000000000.0,1000000000000.0,-3.0];
const v5 = [808112.320198395,-4.924808745595866];
const v6 = [2.0,-4.0];
function f7(a8, a9, a10) {
    const o11 = {
        __proto__: a9,
    };
    return o11;
}
const v12 = f7(1023839354n, v5);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    const v19 = this.constructor;
    try { new v19(F13, 334801300n, v2, v2); } catch (e) {}
    try { a15.toLocaleString(a17); } catch (e) {}
    a18.arguments;
}
new F13(v6, f7, v12, F13);
new F13(v4, F13, F13, 1023839354n);
gc();
