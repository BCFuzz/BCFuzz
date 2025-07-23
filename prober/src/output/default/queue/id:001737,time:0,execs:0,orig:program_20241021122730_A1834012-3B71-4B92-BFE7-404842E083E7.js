const v1 = new Map();
class C2 {
    constructor(a4) {
        new a4(v1);
    }
}
new C2(Map);
gc();
