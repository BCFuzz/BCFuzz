function f0(a1, a2) {
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new Int8Array(255);
    for (const v8 in v7) {
        class C9 {
            constructor(a11) {
                const v13 = `
                    const v14 = F3();
                    a11(v14, ...v14);
                `;
                const v16 = v13.split(a11);
                v16.shift();
                try { v16.flatMap(eval); } catch (e) {}
            }
        }
        new C9(v8);
    }
    return f0;
}
const v20 = [-1073741824];
v20.toString = f0;
const v21 = /(?!\1(a\1)\1)\1/diu;
const v23 = /(x)(x)(x)\1*(Ye3a\n+)/dvg.constructor;
try { v23(v21, v20); } catch (e) {}
gc();
