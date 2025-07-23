class C0 {
    get c() {
        const t2 = this.constructor;
        const v3 = t2();
        const o4 = {
        };
        [-9223372036854775808];
        const v8 = new Proxy(v3, o4);
        v8.b;
    }
}
const v10 = new C0();
function f11() {
    const v12 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
    const o13 = {
        __proto__: v12,
    };
    return o13;
}
v10.constructor = f11;
const v16 = new BigUint64Array(586);
for (const v17 of v16) {
    v10.c;
}
gc();
