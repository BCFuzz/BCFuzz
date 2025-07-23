class C0 {
}
const v1 = [C0];
const o2 = {
    ...v1,
};
const v3 = [-2.0,1000000.0,-1000000.0,-3.0];
const v4 = [1.7976931348623157e+308,1e-15,3.5204602049067457,2.980655024970983e+306,-1.4601091970828127e+308];
function f5(a6) {
    const v7 = [a6];
    const v8 = v4.__proto__;
    const v10 = Symbol.matchAll;
    v8[Symbol.toPrimitive] = v10;
    try { v3.at(v7); } catch (e) {}
}
v4[Symbol.toPrimitive] = f5;
class C15 {
    static [v4];
}
gc();
