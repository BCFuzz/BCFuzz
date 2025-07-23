const v1 = new BigInt64Array();
for (let i5 = 0, i6 = 127; i5 < i6; i6--) {
}
for (let i16 = 0, i17 = 10 + 10;
    i17--, i17;
    (() => {
        for (let i23 = 0, i24 = 10; i23 < v1;) {
        }
    })()) {
}
for (let i34 = 0, i35 = 2520; i35; i35--) {
}
for (let i45 = 0, i46 = 10; i45 < i46; i46--) {
}
const v53 = `
    for (let [i56, i57] = (() => {
            class C55 {
                static 8 = -2147483649;
            }
            return [10, 10];
        })();
        8 < i57;
        ) {
    }
`;
const v63 = v53.replaceAll(8, "");
for (let i66 = -3, i67 = 10;
    (() => {
        const v68 = 8 < i67;
        class C69 {
            constructor(a71) {
                `match${C69}getUint32`;
            }
        }
        function f73() {
            const v74 = /Ih*/vgi;
            const v75 = `
                async function* f76(a77, a78, a79) {
                    return f76;
                }
            `;
            const v81 = v63.replaceAll(i67, v75.split(v74));
            class C82 {
                constructor(a84) {
                    const v86 = `
                        \`match${C82}getUint32${v81}o\`;
                    `;
                    const v88 = v86.split(a84);
                    v88.reverse();
                    v88.flatMap(eval);
                }
            }
            const v91 = new C82(C82);
            return v91;
        }
        C69[Symbol.toPrimitive] = f73;
        try { new C69(); } catch (e) {}
        return v68;
    })();
    i67--) {
}
gc();
