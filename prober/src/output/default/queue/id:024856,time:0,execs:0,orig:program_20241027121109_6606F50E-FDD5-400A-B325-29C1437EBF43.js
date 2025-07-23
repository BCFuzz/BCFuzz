class C0 {
    o(a2, a3) {
        class C5 {
            [-5.274211728360195] = -5.274211728360195;
        }
        const o14 = {
            set d(a7) {
                function f8(a9, a10) {
                    const v11 = new C5();
                    for (const v12 in v11) {
                        v11[v12] = v12;
                    }
                    return a7;
                }
                for (let i = 0; i < 10; i++) {
                    f8(this, C0);
                }
            },
        };
        o14.d = o14;
    }
}
const v15 = new C0();
v15.o();
gc();
