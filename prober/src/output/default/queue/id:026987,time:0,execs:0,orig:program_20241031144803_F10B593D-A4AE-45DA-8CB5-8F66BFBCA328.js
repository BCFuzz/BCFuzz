const v0 = [6];
const v3 = new Int8Array(255);
for (const v4 in v3) {
    let v6 = new Int32Array(v3, 255);
    class C7 {
        constructor(a9) {
            const v11 = `
                v6 /= v0["sort"]();
            `;
            const v14 = v11.split(a9);
            v14.shift();
            try { v14.flatMap(eval); } catch (e) {}
        }
    }
    new C7(v4);
}
gc();
