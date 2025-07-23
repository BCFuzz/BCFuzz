const o14 = {
    n(a1, a2, a3) {
        const v4 = /[(?:a{5,1000000}){3,1000000}?]/mds;
        class C5 {
            constructor(a7) {
                const v9 = `
                    switch (C5) {
                    }
                    /\u{12345}/myvis;
                `;
                const v11 = v9.split(a7);
                try { v11.flatMap(eval); } catch (e) {}
            }
        }
        new C5(v4);
        return a1;
    },
};
const v15 = o14.n;
v15.apply(o14, o14, v15, o14, v15);
gc();
