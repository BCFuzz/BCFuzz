const v0 = [-9223372036854775807,9223372036854775807,1073741825,1000,-11];
function f1(a2, a3) {
    function f4(a5, a6) {
        return a5;
    }
    function f7(a8, a9) {
        const v13 = createGlobalObject().Float16Array;
        new v13(v0);
        const v15 = v13.from("deref");
        v15.set(v15);
        return a3;
    }
    f4[Symbol.toPrimitive] = f7;
    f4.hasOwnProperty(f4);
}
const v20 = [-1.0762406408432525,1000000000.0,0.6213721562587075,782.7679097498537,-1000000.0,-5.5966938420514044e+306,0.6388213605066118,-450147.7870259767,343.74974855238474];
const v21 = [26963,8,268435456,-1914503870,3,7,1073741823,-63999];
v21[Symbol.toPrimitive] = f1;
const o24 = {
    [v21]: v20,
};
gc();
