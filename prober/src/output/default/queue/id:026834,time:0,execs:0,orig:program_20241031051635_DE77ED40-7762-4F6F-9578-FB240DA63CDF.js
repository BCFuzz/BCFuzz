const v0 = [639.4384562833823,-8.055954532684492];
const o1 = {
    "e": v0,
};
for (const v2 in o1) {
    class C3 {
        constructor(a5) {
            const v7 = `
                /\u{12345}/myvis;
                function f9() {
                    for (let v10 = 0; v10 < 5; v10++) {
                    }
                    return C3;
                }
            `;
            const v11 = v7.split(a5);
            try { v11.flatMap(eval); } catch (e) {}
        }
    }
    new C3(v2);
}
gc();
