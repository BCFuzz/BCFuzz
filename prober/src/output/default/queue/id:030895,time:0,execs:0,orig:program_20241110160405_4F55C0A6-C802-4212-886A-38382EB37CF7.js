function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 0, i5 = 2520; i5; i5--) {
    }
    const v11 = `
        class C12 {
        }
    `;
    const v14 = `
        const o15 = {
            "b": 8,
        };
    `;
    const v16 = v14.replaceAll(8, v11);
    for (let i19 = -3, i20 = 10;
        (() => {
            const v21 = 8 < i20;
            class C22 {
                constructor(a24) {
                    const v26 = `
                        \`match${C22}getUint32${v16}o\`;
                    `;
                    const v28 = v26.split(a24);
                    v28.reverse(v28, 8);
                    v28.flatMap(eval);
                }
            }
            try { new C22(C22); } catch (e) {}
            return v21;
        })();
        i20--) {
    }
}
new F0();
for (let i41 = 0, i42 = 10; i41 < i42; i42--) {
}
for (let i50 = 10, i51 = 10;
    8 < i51;
    (() => {
        for (let i57 = 0, i58 = 10; i58--, i57 < i58;) {
            for (let i67 = 0, i68 = 10; i67 < i68; i68--) {
            }
        }
        i51--;
    })()) {
}
for (let i80 = -65536, i81 = 10; i80 < i81; i81--) {
}
for (let i90 = 0, i91 = 65537; i91--;) {
}
for (let [i109, i110] = (() => {
        for (let i100 = 0, i101 = 10; i100 < i101; i101--) {
        }
        return [0, 10];
    })();
    i110--, i109 < i110;
    ) {
}
gc();
