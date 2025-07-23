function f0(a1, a2, a3) {
    return a3;
}
for (let i6 = 10, i7 = 10; -13369 < i7; i7--) {
}
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
}
const v18 = new F14(f0, -13369);
const o20 = {
};
o20.has = f0;
const v22 = new Proxy(v18, o20);
v22[Symbol.toPrimitive] = Symbol;
v18 in v22;
gc();
