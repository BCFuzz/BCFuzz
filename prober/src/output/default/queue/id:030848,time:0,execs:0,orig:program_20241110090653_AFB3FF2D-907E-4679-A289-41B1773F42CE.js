for (let i2 = 0, i3 = 10;
    !(i2 >= i3);
    (() => {
        i3--;
        for (let i11 = 0, i12 = 10; i11 !== i12; i12--) {
        }
    })()) {
}
class C21 {
    constructor(a23, a24, a25, a26) {
        const v28 = `
            for (let v29 = 0; v29 < 5; v29++) {
            }
        `;
        const v30 = v28.replaceAll(0, a25);
        class C31 {
            constructor(a33) {
                const v35 = `
                    \`match${C31}getUint32${v30}o\`;
                `;
                v35.split(a33).reverse().flatMap(eval);
            }
        }
        try { new C31(C31); } catch (e) {}
    }
}
for (let i43 = 0, i44 = 10; i43 < i44; i44--) {
}
let v51 = eval;
let v52 = 8;
for (let i55 = 0, i56 = 10; i56--, i55 < i56;) {
}
for (let [i82, i83] = (() => {
        for (let i65 = 0, i66 = 10; i66--;) {
        }
        for (let i74 = 10, i75 = 10; i75; i75--) {
        }
        return [0, 10];
    })();
    i82 < i83;
    i83--) {
}
let v90 = "source";
[v51,v52,v90] = v90;
const v91 = `
    do {
        new Proxy(v52, v90);
    } while (0 < 65536)
`;
const v97 = v91.split(v52);
function f98(a99, a100, a101) {
    return a99;
}
new C21(C21, f98, f98(v97));
gc();
