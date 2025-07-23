let v0 = 55653;
class C2 {
    constructor(a4, a5) {
        const v6 = this.constructor;
        try { new v6(a4, a4); } catch (e) {}
        v0 = a5;
        delete v0[4096];
        a5 === a4;
    }
}
const v10 = new C2("g", C2);
const v11 = new C2(v10, "g");
const v12 = v11.__proto__;
const t13 = v12.constructor;
new t13(v0, v12);
gc();
