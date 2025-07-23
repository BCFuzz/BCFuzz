for (let i2 = 0, i3 = 1851; i3--, i2 < i3;) {
}
const o10 = {
};
for (let i13 = 0, i14 = 10;
    (() => {
        const v15 = i13 < i14;
        function F16() {
            if (!new.target) { throw 'must be called with new'; }
        }
        let v18 = new F16();
        let v19 = eval;
        let v20 = 8;
        let v21 = "source";
        [v19,v20,v21] = v21;
        const v22 = `
            do {
                v18 = o10;
            } while (0 < 65536)
        `;
        const v26 = v22.split(v20);
        function F27(a29, a30, a31, a32) {
            if (!new.target) { throw 'must be called with new'; }
            const v35 = `
                const v36 = 8 != v26;
                v36 << v36;
            `;
            const v38 = v35.replaceAll(8, v26);
            for (let i41 = -3, i42 = 10;
                (() => {
                    const v43 = 8 < i42;
                    class C44 {
                        constructor(a46) {
                            const v48 = `
                                \`match${C44}getUint32${v38}o\`;
                            `;
                            const v50 = v48.split(a46);
                            v50.reverse(a30);
                            v50.flatMap(eval);
                        }
                    }
                    try { new C44(C44); } catch (e) {}
                    return v43;
                })();
                i42--) {
            }
        }
        new F27();
        return v15;
    })();
    (() => {
        for (let i64 = 0, i65 = 10; i64 < i65; i65--) {
        }
        i14--;
    })()) {
}
for (let [i87, i88] = (() => {
        for (let i78 = 0, i79 = 127; i78 < i79; i79--) {
        }
        return [0, 10];
    })();
    i87 < i88;
    i88--) {
}
gc();
