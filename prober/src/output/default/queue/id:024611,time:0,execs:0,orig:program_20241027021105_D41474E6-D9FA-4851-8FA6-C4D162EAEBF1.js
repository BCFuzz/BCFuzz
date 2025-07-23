function f1(a2, a3, a4) {
    return "10626891";
}
function f5() {
    return f1;
}
f5.name = f5;
class C7 {
    constructor(a9, a10, a11) {
        const v12 = this.constructor;
        try { new v12(f1, "10626891"); } catch (e) {}
        a10 + a10;
        const t11 = a10.__proto__;
        t11.valueOf = f5;
    }
}
new C7(54.72440871043136, 54.72440871043136);
try { new C7(); } catch (e) {}
gc();
