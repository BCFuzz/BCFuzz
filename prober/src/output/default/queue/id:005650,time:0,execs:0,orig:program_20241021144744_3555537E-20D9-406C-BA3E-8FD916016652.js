class C0 {
}
const o11 = {
    set d(a2) {
        const v3 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
        function f4(a5, a6) {
            a5.d;
            try { a6.apply(C0, a5); } catch (e) {}
            const o9 = {
                __proto__: v3,
            };
            return this;
        }
        for (let i = 0; i < 100; i++) {
            f4(a2, f4);
        }
    },
};
o11.d = o11;
gc();
