const v0 = /(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10a|bcgA/mvs;
const v1 = /(0)/mvg;
const o2 = {
    __proto__: v0,
};
const v4 = new Int32Array();
class C6 {
    constructor(a8, a9, a10) {
        function f11() {
            v4.copyWithin(C6, 256, a9);
            return o2;
        }
        function F13(a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            const v18 = new Uint8Array(this);
            v18.valueOf = f11;
            v18[3] = v18;
        }
        new F13(v4, a10);
    }
}
const v20 = new C6();
const v21 = v20.constructor;
try { new v21(v1, o2); } catch (e) {}
gc();
