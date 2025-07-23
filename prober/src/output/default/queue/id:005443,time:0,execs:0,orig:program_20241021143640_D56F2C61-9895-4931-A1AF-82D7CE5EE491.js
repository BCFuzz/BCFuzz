function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const o9 = {
    valueOf(a4) {
        undefined < this;
        const v7 = Uint8Array();
        for (const v8 in v7) {
            v7[v8] = v8;
        }
        return v7;
    },
};
class C10 extends F0 {
    constructor(a12, a13, a14) {
        super();
        try { o9.valueOf(); } catch (e) {}
    }
}
new C10(F0, C10, F0);
gc();
