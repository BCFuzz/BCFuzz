for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
function f10(a11, a12) {
    function f13(a14, a15) {
        const o18 = {
            "maxByteLength": 65536,
        };
        const v20 = new ArrayBuffer(4, o18);
        const v22 = new BigInt64Array(v20, f13, a12);
        return v22;
    }
    const t11 = f13.bind();
    t11();
}
const v25 = [-1.0762406408432525,1000000000.0,0.6213721562587075,782.7679097498537,-1000000.0,-5.5966938420514044e+306,0.6388213605066118,-450147.7870259767,343.74974855238474];
const v26 = [26963,8,268435456,-1914503870,3,7,1073741823,-63999];
v26[Symbol.toPrimitive] = f10;
const o29 = {
    [v26]: v25,
};
gc();
