const v1 = new Date();
class C2 extends Date {
    valueOf(a4, a5) {
        Date.__proto__ = v1;
        return Date;
    }
}
const v6 = new C2();
const v7 = v6.valueOf();
try { ("45954").at(v7); } catch (e) {}
gc();
