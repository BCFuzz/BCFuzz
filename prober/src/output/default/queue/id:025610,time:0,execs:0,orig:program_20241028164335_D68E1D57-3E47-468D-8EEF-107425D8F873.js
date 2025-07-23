const o1 = {
    "a": -12,
};
const v2 = [10];
for (const v3 in o1) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    try { v2["every"](); } catch (e) {}
                    /\u{12345}/myvis;
                    return "every";
                }
            `;
            const v13 = v8.split(a6);
            for (let i16 = 0, i17 = 10; i17-- < i17;) {
            }
            try { v13.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
