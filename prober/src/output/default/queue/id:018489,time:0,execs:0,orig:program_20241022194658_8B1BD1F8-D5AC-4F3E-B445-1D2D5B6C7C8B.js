function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
typeof v2 === "symbol";
gc();
