function f0(a1, a2) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new Int8Array(255);
    for (const v8 in v7) {
        class C9 {
            constructor(a11) {
                const v13 = `
                    /\u{12345}/myvis;
                    const v15 = F3();
                    a11(v15, ...v15);
                `;
                const v17 = v13.split(a11);
                v17.shift();
                try { v17.flatMap(eval); } catch (e) {}
            }
        }
        new C9(v8);
    }
    return a2;
}
const v21 = [-1073741824];
v21.toString = f0;
const v22 = /(?!\1(a\1)\1)\1/diu;
const v24 = /(x)(x)(x)\1*(Ye3a\n+)/dvg.constructor;
try { v24(v22, v21); } catch (e) {}
gc();
