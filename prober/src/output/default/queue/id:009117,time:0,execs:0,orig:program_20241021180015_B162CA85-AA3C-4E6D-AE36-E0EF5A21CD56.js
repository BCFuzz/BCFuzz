function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const o6 = {
    valueOf(a4) {
        undefined >= this;
        return undefined;
    },
};
class C7 extends F0 {
    constructor(a9, a10, a11) {
        super();
        try { o6.valueOf(); } catch (e) {}
    }
}
new C7(F0, C7, undefined);
gc();
