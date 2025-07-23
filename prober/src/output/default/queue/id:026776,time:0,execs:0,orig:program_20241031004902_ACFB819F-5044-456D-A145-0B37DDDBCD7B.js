const v1 = new Float64Array();
for (let i = 0; i < 10; i++) {
    const o21 = {
        set b(a4) {
            const v6 = `
                class C8 extends Map {
                }
            `;
            const v9 = v6.split(3);
            function F10(a12, a13, a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                try { a15.constructor(v9); } catch (e) {}
            }
            new F10();
            const v18 = "" + a4;
            for (let v19 = 0; v19 < 250; v19++) {
            }
            v18 in v1;
        },
    };
    o21.b = o21;
    function f22(a23, a24) {
    }
    o21[Symbol.toPrimitive] = f22;
    o21.b = o21;
}
gc();
