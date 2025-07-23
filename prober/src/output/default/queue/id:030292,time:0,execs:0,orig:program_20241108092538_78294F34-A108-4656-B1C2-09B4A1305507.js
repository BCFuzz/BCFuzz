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
        `;
        const v68 = `
            const o69 = {
            };
            switch (o69) {
                case createGlobalObject:
                    break;
                case -2080884642n:
                    break;
            }
        `;
        const v71 = v68.replaceAll(8, v66);
        for (let i74 = -3, i75 = 10;
            (() => {
                const v76 = 8 < i75;
                class C77 {
                    constructor(a79) {
                        const v81 = `
                            \`match${C77}getUint32${v71}o\`;
                        `;
                        const v83 = v81.split(a79);
                        v83.reverse(v83);
                        v83.flatMap(eval);
                    }
                }
                try { new C77(C77); } catch (e) {}
                return v76;
            })();
            i75--) {
        }
        return v65;
    })();
    i64--) {
}
for (let i99 = 0, i100 = 10; i99 !== i100; i100--) {
}
gc();
