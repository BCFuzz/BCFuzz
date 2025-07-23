let v0 = 16;
v0--;
const v2 = `
    class C3 {
        constructor(a5) {
            try {
                [-1000000.0,1.2337763983363158e+308,835596.6044329079,774.8769709792768,-2.2633146704700077e+307,9.154492609882622e+307,-1000000000.0,2.0];
                [216732.3889116377,1e-15,-1.5651192600244812,1e-15,8.011825901947284e+307,797.8355107831374];
            } catch(e8) {
            }
        }
    }
`;
const v9 = v2.split(v0);
const v10 = [2.0,-4.0];
function f11(a12, a13, a14) {
    return a13;
}
const v15 = f11(v10, v10, v2);
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    try { a21.constructor(v9); } catch (e) {}
}
new F16(v10, f11, v15, F16);
gc();
