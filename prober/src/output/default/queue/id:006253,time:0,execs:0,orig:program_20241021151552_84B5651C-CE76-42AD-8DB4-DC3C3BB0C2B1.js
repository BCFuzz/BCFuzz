const v0 = /4o/mdsu;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a3.name = a3;
    a3.arguments = a3;
}
const v5 = new F1(F1);
const t7 = v5.constructor;
new t7(v0);
const t9 = v5.constructor;
const v9 = new t9(F1);
const t11 = v9.constructor;
new t11(v5);
gc();
