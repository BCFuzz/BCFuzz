class C0 {
    get c() {
        const t2 = this.constructor;
        const v3 = new t2();
        try { v3.forEach(); } catch (e) {}
    }
}
const v5 = new C0();
function f6() {
    const v7 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
    const o8 = {
        __proto__: v7,
    };
    return o8;
}
v5.constructor = f6;
const v11 = new BigUint64Array(586);
for (const v12 of v11) {
    v5.c;
}
gc();
