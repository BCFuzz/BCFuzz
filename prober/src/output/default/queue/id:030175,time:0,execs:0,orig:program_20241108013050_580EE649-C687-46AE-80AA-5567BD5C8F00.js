const v3 = [[/ia\fb\nc\rd\te\vf/mdyv,/U\xe2\x81\xa3/vg]];
const v4 = /aa??/mgiu;
function f5(a6) {
    for (let i9 = 0, i10 = 10;
        (() => {
            for (let i13 = 0, i14 = 10;
                i13 < i14;
                (() => {
                    const v18 = i14--;
                    for (let [i29, i30] = (() => {
                            class C19 {
                                constructor(a21) {
                                    const v23 = `
                                        \`match${v3}getUint32\`;
                                    `;
                                    v23.split(a21).flatMap(eval);
                                }
                            }
                            try { new C19(v18); } catch (e) {}
                            return [i14, 10];
                        })();
                        i29 < i30;
                        i30--) {
                    }
                })()) {
            }
            return i10;
        })();
        i10--) {
    }
    return a6;
}
v4[Symbol.toPrimitive] = f5;
class C46 {
    [v4];
}
gc();
