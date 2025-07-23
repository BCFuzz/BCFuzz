function f0(a1, a2) {
    return f0;
}
const v3 = [-0.888876439764374,5.0,-31075.940693754004,0.0,-5.0,2.326945587547197,2.220446049250313e-16,-0.0,9.993763252577222e+307];
v3[Symbol.toPrimitive] = f0;
const o6 = {
    __proto__: v3,
};
o6[2] = o6;
const v7 = o6.slice();
try { v7.sort(); } catch (e) {}
gc();
