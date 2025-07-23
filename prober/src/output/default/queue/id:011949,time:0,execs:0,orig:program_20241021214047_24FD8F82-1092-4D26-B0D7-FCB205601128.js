function f0(a1, a2) {
    function f3(a4, a5) {
        const o8 = {
            "maxByteLength": 65536,
        };
        const v10 = new ArrayBuffer(4, o8);
        const v12 = new BigInt64Array(v10);
        v12.indexOf();
        return o8;
    }
    const v14 = f3.bind(a1, a1, f3, f0, a2);
    v14(f0, f0, a1, v14);
}
const v16 = [-1.0762406408432525,1000000000.0,0.6213721562587075,782.7679097498537,-1000000.0,-5.5966938420514044e+306,0.6388213605066118,-450147.7870259767,343.74974855238474];
const v17 = [26963,8,268435456,-1914503870,3,7,1073741823,-63999];
v17[Symbol.toPrimitive] = f0;
const o20 = {
    [v17]: v16,
};
gc();
