const o13 = {
    n(a1, a2, a3) {
        const v4 = /[(?:a{5,1000000}){3,1000000}?]/mds;
        class C5 {
            constructor(a7) {
                const v9 = `
                    switch (C5) {
                    }
                `;
                const v10 = v9.split(a7);
                try { v10.flatMap(eval); } catch (e) {}
            }
        }
        new C5(v4);
        return C5;
    },
};
const v14 = o13.n;
v14.apply(v14, v14);
gc();
