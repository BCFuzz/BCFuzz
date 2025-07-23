const v1 = [10];
const v4 = new Int8Array(255);
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                function f11() {
                    let v13;
                    try { v13 = v1["every"]("every", this, f11, 1000000.0); } catch (e) {}
                    v13[0] = v1;
                    /\u{12345}/myvis;
                }
            `;
            const v15 = v10.split(a8);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();
