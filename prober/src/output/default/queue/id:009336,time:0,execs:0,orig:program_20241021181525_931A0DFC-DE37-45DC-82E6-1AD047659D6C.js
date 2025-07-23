const v0 = [-1.0,1000.0,1000000000000.0];
class C1 {
    #toString(a3) {
    }
}
const v4 = new C1();
const v5 = new C1();
const v6 = v5.constructor;
const v7 = new v6(v6, v6, v4);
class C8 {
    constructor(a10, a11, a12) {
        const v13 = this.constructor;
        try { new v13(v7); } catch (e) {}
        const t13 = a10.constructor;
        const v16 = new t13(v6, v4, this, C1);
        const t15 = v16.constructor;
        new t15();
        const v19 = a10.constructor;
        try { v19.toString(); } catch (e) {}
    }
}
C8.e = C8;
new C8(v4);
const v22 = new C8(v4);
const t24 = v22.constructor.e;
new t24(v0);
gc();
