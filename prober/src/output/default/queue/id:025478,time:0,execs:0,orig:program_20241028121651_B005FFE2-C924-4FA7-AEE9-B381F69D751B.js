const v2 = createGlobalObject().Float16Array;
class C3 extends v2 {
    constructor(a5, a6, a7, a8) {
        super();
        const v9 = [v2];
        class C10 {
            [v9];
        }
        try { this.subarray(); } catch (e) {}
    }
}
new C3(v2, C3, v2, v2);
gc();
