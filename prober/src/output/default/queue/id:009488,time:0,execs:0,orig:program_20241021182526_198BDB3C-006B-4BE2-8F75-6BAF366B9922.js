const v2 = new Uint32Array(1);
for (let v3 of v2) {
    const o15 = {
        n(a5, a6, a7) {
            class C8 {
                constructor(a10, a11, a12, a13) {
                    v3 %= a12;
                }
            }
            new C8(a7, v3, this, Uint32Array);
            return a6;
        },
    };
    const t13 = o15.n;
    t13();
    v2.includes(v3);
}
gc();
