class C0 {
    static set b(a2) {
        Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
    }
}
const v4 = new C0();
const o5 = {
    __proto__: C0,
};
C0.b = v4;
const v6 = [-9223372036854775807,9223372036854775807,1073741825,1000,-11];
function f7(a8, a9) {
    function f10(a11, a12) {
        return f10;
    }
    function f13(a14, a15) {
        const t16 = createGlobalObject().Float16Array;
        new t16(v6);
        return a15;
    }
    f10[Symbol.toPrimitive] = f13;
    f10.hasOwnProperty(f10);
    return a8;
}
const v23 = [-1.0762406408432525,1000000000.0,0.6213721562587075,782.7679097498537,-1000000.0,-5.5966938420514044e+306,0.6388213605066118,-450147.7870259767,343.74974855238474];
const v24 = [26963,8,268435456,-1914503870,3,7,1073741823,-63999];
v24[Symbol.toPrimitive] = f7;
const o27 = {
    [v24]: v23,
};
gc();
