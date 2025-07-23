for (let i3 = 0, i4 = 10; i4--, i3 < i4;) {
}
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
for (let [i63, i64] = (() => {
        for (let i33 = 0, i34 = 10;
            (() => {
                i34--;
                for (let i38 = -3, i39 = 10;
                    (() => {
                        for (let i42 = 0, i43 = 10; i42 !== i43; i43--) {
                        }
                        return i38 < i39;
                    })();
                    i39--) {
                }
                return i33 < i34;
            })();
            ) {
        }
        return [0, 10];
    })();
    (() => {
        const v65 = i63 < i64;
        const v66 = `
            Int8Array([createGlobalObject,createGlobalObject,createGlobalObject,createGlobalObject,createGlobalObject]);
            const o72 = {
                next() {
                    /\u{12345}/myvis;
                    return i63;
                },
            };
        `;
        const v74 = `
            const o75 = {
            };
            switch (o75) {
                case createGlobalObject:
                    break;
                case -2080884642n:
                    break;
            }
        `;
        const v77 = v74.replaceAll(8, v66);
        for (let i80 = -3, i81 = 10;
            (() => {
                const v82 = 8 < i81;
                class C83 {
                    constructor(a85) {
                        const v87 = `
                            \`match${C83}getUint32${v77}o\`;
                        `;
                        const v89 = v87.split(a85);
                        v89.reverse(a85, this, i64);
                        v89.flatMap(eval);
                    }
                }
                try { new C83(C83); } catch (e) {}
                return v82;
            })();
            i81--) {
        }
        return v65;
    })();
    i64--) {
}
for (let i105 = 0, i106 = 10; i105 !== i106; i106--) {
}
gc();
