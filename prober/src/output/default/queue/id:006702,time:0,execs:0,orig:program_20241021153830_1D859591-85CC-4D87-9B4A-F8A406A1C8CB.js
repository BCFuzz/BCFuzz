class C0 {
    get c() {
        const t2 = this.constructor;
        new t2();
    }
}
const v4 = new C0();
function f5() {
    const v6 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
    const o7 = {
        __proto__: v6,
    };
    return o7;
}
v4.constructor = f5;
const v10 = new BigUint64Array(586);
for (const v11 of v10) {
    v4.c;
}
gc();
