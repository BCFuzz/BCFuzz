function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0();
function f7(a8, a9) {
    return v5;
}
const v10 = f7(v5, F0);
const v11 = v10.__defineSetter__;
let v12;
try { v12 = v11(v11, v11, f7); } catch (e) {}
const t11 = f7(v12, v11).constructor;
const v15 = new t11();
const v16 = v15.constructor;
([Reflect,Reflect,Reflect])[2].set(v16, 7, v10, v12);
gc();
