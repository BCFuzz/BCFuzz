let v1 = 255;
const v2 = new Int8Array(v1);
for (let v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function F9(a11, a12, a13) {
                    if (!new.target) { throw 'must be called with new'; }
                    [F9,v3,v1,F9] = "v90ev";
                    /\u{12345}/myvis;
                }
            `;
            const v16 = v8.split(a6);
            try { v16.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
