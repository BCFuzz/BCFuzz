class C0 {
}
new C0();
new Uint8Array(C0, 3129);
const v5 = `
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        this.p16 = a9;
        for (let v10 = 0; v10 < 25; v10++) {
            const v12 = "p" + v10;
            this[v12];
            for (let v14 = 0; v14 < 25; v14++) {
            }
            this[v12] = v10;
        }
    }
    new F6();
`;
eval(v5);
gc();
