function f0() {
    return f0;
}
class C1 {
    constructor(a3, a4) {
        delete a3[f0];
    }
}
const v11 = eval(([[-2.220446049250313e-16,C1]]).toLocaleString());
try { new v11(); } catch (e) {}
gc();
