for (let i3 = 0, i4 = 10 + 10;
    (() => {
        const v5 = i4--;
        for (let i8 = 0, i9 = 10; i8 !== i9; i9--) {
        }
        for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
        }
        const v26 = `
            for (let [i33, i34] = (() => {
                    let {"a":v29,"length":v30,...v31} = [5.0,-441.4751514534918,-1000.0,-1000.0,-1.1090171354440148e+308];
                    return [10, 10];
                })();
                -20873 < i34;
                ) {
            }
            /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
        `;
        const v41 = v26.replaceAll(v5, i4);
        class C42 {
            constructor(a44) {
                const v46 = `
                    \`match${C42}getUint32${v41}o\`;
                `;
                const v48 = v46.split(a44);
                v48.reverse();
                v48.flatMap(eval);
            }
        }
        try { new C42(C42); } catch (e) {}
        for (let i54 = 0, i55 = 10; i54 < i55; i55--) {
        }
        return i3 < i4;
    })();
    ) {
}
gc();
