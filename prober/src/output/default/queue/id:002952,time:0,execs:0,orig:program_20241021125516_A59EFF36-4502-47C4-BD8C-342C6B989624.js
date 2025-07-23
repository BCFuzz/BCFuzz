new Array(7);
new WeakSet();
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
}
new F11(-55361n, "5v", "e", 35201n);
new F11(-55361n, "5v", "e", 35201n);
new F11(3n, "5v", "5v", -55361n);
const v20 = `
    let v21 = 2;
    (1 / Infinity) ** Infinity;
    ++v21;
    Infinity - Infinity;
    const v29 = new Date();
    class C30 extends Date {
        constructor(a32, a33) {
            super();
            gc();
            for (let v36 = 0; v36 < 25; v36++) {
                v29["p" + v36] = v36;
            }
        }
    }
    const v39 = new C30();
    new C30();
    new C30();
    class C42 extends C30 {
    }
    new C42();
    for (let i = 0; i < 5; i++) {
        v39["toISOString"]();
    }
`;
eval(v20);
gc();
