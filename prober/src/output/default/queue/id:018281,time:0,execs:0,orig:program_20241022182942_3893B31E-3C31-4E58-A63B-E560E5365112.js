class C0 {
    get c() {
        const t2 = this.constructor;
        const v3 = t2();
        const o4 = {
        };
        const v6 = new Proxy(v3, o4);
        v6.b;
        try { v3.forEach(); } catch (e) {}
    }
}
const v9 = new C0();
function f10() {
    const v11 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
    const o12 = {
        __proto__: v11,
    };
    return o12;
}
v9.constructor = f10;
const v15 = new BigUint64Array(586);
for (const v16 of v15) {
    v9.c;
}
gc();
