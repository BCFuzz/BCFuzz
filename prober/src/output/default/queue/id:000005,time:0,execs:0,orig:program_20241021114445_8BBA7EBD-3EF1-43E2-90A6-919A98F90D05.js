const v1 = new Set();
function f2() {
    return v1;
}
const v3 = [4.0,Infinity,0.5618997475165836,0.43493627721911254,3.0,NaN,-0.0,4.0];
const v4 = [0.8137957067341389,0.011353854179586897,1000000000.0,-5.0,Infinity,0.24802319623700397];
const v5 = [2.919067828015354,2.5559774662719335,5.136866503510163,-5.467954082035803e+307,1000000000.0,0.39675748244385967,765445.851600592,123.14082046357544,Infinity,0.3782383802495817];
function f6(a7, a8, a9) {
    const o16 = {
        "h": v4,
        "c": a7,
        "a": a7,
        "e": a9,
        "d": v3,
        get b() {
            function f12(a13, a14) {
                this[218] |= a14;
                v1 / false;
            }
            return a9;
        },
    };
    return o16;
}
const v17 = f6(v5, v3, v4);
const v18 = f6(v4, v3, v3);
const v19 = f6(v4, v5, v5);
function f20(a21, a22, a23) {
    const o24 = {
        88: a22,
        "a": a22,
        __proto__: v4,
        64: a21,
        ...a22,
        [v17]: a22,
        "d": v17,
        "f": v3,
        ...a23,
        "g": v17,
    };
    return o24;
}
f20(Set, f20(v19, f6, v4), v5);
const v27 = f20(v4, v4, v3);
v27 || 536870912;
const v32 = Math.cos(+v27);
try { v18.random(v32, v1); } catch (e) {}
11876 * Set;
gc();
