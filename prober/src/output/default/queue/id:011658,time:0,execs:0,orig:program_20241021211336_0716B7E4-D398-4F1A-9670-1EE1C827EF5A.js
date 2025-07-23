const v1 = new Date();
class C2 {
    constructor(a4, a5) {
        try { new a5(v1, a4); } catch (e) {}
        createGlobalObject();
    }
}
const v9 = new C2(C2, C2);
new C2(v9, Date);
gc();
