const v2 = new Int8Array(255);
for (const v4 in v2) {
    class C5 {
        constructor(a7) {
            const v9 = `
                Object.defineProperty(/a(?!bbb|bb)ca(?=b)cMN(?:a{5,1000000}){3,1000000}/mdg, 10n, { writable: true, enumerable: true, value: "4" });
            `;
            const v12 = v9.split(a7);
            v12.reverse();
            try { v12.flatMap(Function); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();
