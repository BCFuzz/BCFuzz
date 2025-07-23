function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = v2.constructor;
const v4 = new v3(v2, v3);
typeof v4 === "function";
gc();
