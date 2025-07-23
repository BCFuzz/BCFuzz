class C0 {
}
class C1 extends C0 {
    a = C0;
}
const v2 = new C1();
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function f9() {
                    function f10(a11, a12, a13, a14) {
                        return C4;
                    }
                    return v2;
                }
            `;
            const v15 = v8.split(a6);
            try { v15.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();
