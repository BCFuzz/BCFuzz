const v1 = ["__proto__","__proto__"];
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.__lookupSetter__(a5);
}
const v8 = new F2();
const t6 = v8.constructor;
new t6(v1, "__proto__");
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
