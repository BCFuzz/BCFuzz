class C2 {
    constructor(a4, a5) {
        const t2 = this.__proto__;
        t2.valueOf = a5;
    }
}
const v7 = new C2(C2, C2);
const v8 = new C2(v7, 2.220446049250313e-16);
new C2(C2, 2.220446049250313e-16);
v8 % "resolve";
gc();
