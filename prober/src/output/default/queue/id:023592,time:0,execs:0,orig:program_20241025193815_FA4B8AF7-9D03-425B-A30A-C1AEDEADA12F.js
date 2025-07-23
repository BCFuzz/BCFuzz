const v0 = /(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10a|bcgA/mvs;
const v1 = /(0)/mvg;
const o2 = {
    __proto__: v0,
};
const v4 = new Uint8ClampedArray(v1, v1, Uint8ClampedArray);
class C6 {
    constructor(a8, a9, a10) {
        function f11() {
            v4.copyWithin(C6, 256, a9);
            return C6;
        }
        function F13(a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            const v18 = new Uint8Array();
            v18.valueOf = f11;
            v18[3] = v18;
        }
        new F13();
    }
}
const v20 = new C6(v0, C6, 256);
const v21 = v20.constructor;
try { new v21(v1, o2); } catch (e) {}
gc();
