function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
    constructor(a4, a5, a6) {
        super();
        const v7 = [0.9243501303703721];
        const v9 = 2 - 2;
        const v11 = new Date(v9, v7, v7, 2, v9, v9, Date);
        v11.getUTCMinutes();
    }
}
new C2(F0, F0, F0);
gc();
