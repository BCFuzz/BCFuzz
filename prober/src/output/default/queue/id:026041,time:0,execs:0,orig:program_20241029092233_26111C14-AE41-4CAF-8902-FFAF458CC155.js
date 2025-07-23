const v0 = [];
const o1 = {
};
const v2 = [1.7976931348623157e+308,1e-15,3.5204602049067457,2.980655024970983e+306,-1.4601091970828127e+308];
function f3(a4) {
    const t5 = v2.__proto__;
    t5.toJSON = a4;
    return a4;
}
v2[Symbol.toPrimitive] = f3;
class C8 {
    static [v2];
}
o1.toJSON = v0;
function f9() {
    return v0;
}
class C10 extends f9 {
    constructor(a12, a13) {
        for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
        }
        super();
        const v26 = Date();
        const o27 = {
            [Math]: v26,
            "h": o1,
        };
        JSON.stringify(o27);
    }
}
new C10(C10, v0);
gc();
