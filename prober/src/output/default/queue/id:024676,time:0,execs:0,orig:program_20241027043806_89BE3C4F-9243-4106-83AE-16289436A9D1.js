class C1 {
    [-5.274211728360195] = -5.274211728360195;
}
const o10 = {
    set d(a3) {
        function f4(a5, a6) {
            const v7 = new C1();
            for (const v8 in v7) {
                v7[v8] = v8;
            }
            return this;
        }
        for (let i = 0; i < 100; i++) {
            f4(this, this);
        }
    },
};
o10.d = o10;
gc();
