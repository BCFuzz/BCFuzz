function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
class C4 {
    #toString(a6) {
    }
    constructor(a8) {
        const v9 = this.constructor;
        try { new v9(this); } catch (e) {}
        try {
            a8.#toString();
        } catch(e12) {
        }
    }
}
const v13 = new C4();
const v14 = new C4(C4);
const t17 = v14.constructor;
const v16 = new t17();
const v17 = v16.constructor;
v14[-1] = F0;
new v17(F0, v13, v17, C4, v16);
gc();
