class C0 {
    constructor(a2, a3, a4) {
        try { this.o(a4, a3, C0, a2, a4); } catch (e) {}
    }
    o(a7, a8, a9, a10) {
        const t5 = createGlobalObject().Float16Array;
        const v16 = new t5();
        v16.buffer.transferToFixedLength(C0);
        const o23 = {
            n(a20, a21, a22) {
                super[127] = Int8Array;
                return v16;
            },
        };
        o23.n.apply(v16);
    }
}
new C0();
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
}
gc();
