const v0 = [];
const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                const o21 = {
                    get f() {
                        /m[\cA](?<!)\u{12345}1(?<a>(?<b>(?<c>(?<d>.).).).)*/dysu;
                        for (let i14 = 0, i15 = 10; i14 < i15;) {
                        }
                        return this;
                    },
                };
                new v3(o21, o21, ...v0);
            `;
            const v23 = v9.split(a7);
            v23.reverse(v4, v23, a7, v23, v9);
            try { v23.flatMap(eval); } catch (e) {}
        }
    }
    new C5(v4);
}
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
}
for (let i39 = 0, i40 = 10; i39 < i40; i40--) {
}
for (let i49 = 0, i50 = 10; i49 < i50; i50--) {
}
gc();
