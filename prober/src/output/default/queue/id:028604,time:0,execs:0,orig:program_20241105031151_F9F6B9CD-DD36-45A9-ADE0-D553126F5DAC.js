const o0 = {
};
const v1 = [1.7976931348623157e+308,1e-15,3.5204602049067457,2.980655024970983e+306,-1.4601091970828127e+308];
function f2(a3) {
    const t4 = o0.__proto__;
    t4.toJSON = a3;
    return a3;
}
v1[Symbol.toPrimitive] = f2;
class C7 {
    static [v1];
}
function f8() {
    return f2;
}
class C9 extends f8 {
    constructor(a11, a12) {
        super();
        const o13 = {
        };
        JSON.stringify(o13);
    }
}
new C9();
gc();
