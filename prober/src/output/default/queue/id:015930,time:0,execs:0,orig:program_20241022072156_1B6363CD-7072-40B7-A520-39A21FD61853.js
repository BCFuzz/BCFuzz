for (let i2 = 10, i3 = 10; -13369 < i3; i3--) {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
}
const v14 = new F10();
const o16 = {
};
const v18 = new Proxy(v14, o16);
Object.defineProperty(v18, "toString", { writable: true, configurable: true, enumerable: true, value: Symbol });
v14 in v18;
gc();
