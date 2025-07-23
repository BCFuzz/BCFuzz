function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    a7.h = "isExtensible";
}
const v9 = new F4(394208.9421366246, 394208.9421366246);
const v10 = new F4(2.0, 394208.9421366246);
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    const v15 = this.constructor;
    try { new v15(v9); } catch (e) {}
    const t10 = v10.constructor;
    new t10(2.0, a13);
}
new F11("function");
new F11(v9);
gc();
