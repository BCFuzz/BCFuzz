const v1 = [-Infinity,-691832.4173211381,1000000000000.0,NaN,-3.0,1000000000000.0,1000000000000.0,-3.0];
const v2 = [-3.0,-651244.1040493406,-1000000000.0];
const v3 = [2.0,-4.0];
function f4(a5, a6, a7) {
    const o8 = {
        __proto__: a6,
        ...v1,
    };
    return o8;
}
const v9 = f4(1023839354n, v2);
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
}
const v16 = new F10(v3, f4, v9, F10);
const v17 = new F10(v1, F10, F10, 1023839354n);
v3[2147483648] = v16;
Object.defineProperty(v9, 2633299063, { configurable: true, set: f4 });
v9.toString();
Math.clz32(v17);
Math.acosh(404.01469281244954);
gc();
