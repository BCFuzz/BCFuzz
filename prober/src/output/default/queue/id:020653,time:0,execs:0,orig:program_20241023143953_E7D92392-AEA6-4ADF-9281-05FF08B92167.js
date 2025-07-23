function f1(a2, a3) {
    const o5 = {
        "maxByteLength": 1073741824,
    };
    const v8 = createGlobalObject().Float16Array;
    const v10 = new ArrayBuffer(1622, o5);
    const v11 = new v8(v10);
    v11.byteOffset;
}
const v13 = [-1.0762406408432525,1000000000.0,0.6213721562587075,782.7679097498537,-1000000.0,-5.5966938420514044e+306,0.6388213605066118,-450147.7870259767,343.74974855238474];
const v14 = [26963,8,268435456,-1914503870,3,7,1073741823,-63999];
v14.toString = f1;
for (let v15 = 0; v15 < 5; v15++) {
    const o16 = {
        [v14]: v13,
    };
}
gc();
