function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
function f5(a6) {
    const o15 = {
        n(a8, a9, a10) {
            const v11 = this;
            const v12 = v11.Intl;
            v12.numeric = a8;
            const v13 = v12.RelativeTimeFormat;
            new v13(v13, v12);
            return v13;
        },
    };
    const v16 = o15.n;
    v16(v16);
    return a6;
}
Object.defineProperty(v4, "constructor", { enumerable: true, value: f5 });
const v18 = v4.constructor;
try { v18(); } catch (e) {}
gc();
