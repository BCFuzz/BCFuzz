function f0() {
}
function f1() {
}
function f2(a3) {
    const o8 = {
        set f(a5) {
            a5 ^ (f1 - f0);
        },
        ...a3,
    };
    return o8;
}
f2(f2(f2));
const v13 = new WeakMap();
try { v13.get(-1221592730); } catch (e) {}
function F16() {
    if (!new.target) { throw 'must be called with new'; }
}
F16.length = F16;
new F16();
gc();
