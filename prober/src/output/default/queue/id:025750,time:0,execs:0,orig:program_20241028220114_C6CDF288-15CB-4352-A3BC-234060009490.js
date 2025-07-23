const v1 = new Uint32Array(Uint32Array);
function f2() {
    function f3() {
        const v6 = new Int8Array(255);
        for (const v7 in v6) {
            class C8 {
                constructor(a10) {
                    const v12 = `
                        async function* f13(a14, a15, a16) {
                            return a14;
                        }
                        /\u{12345}/myvis;
                    `;
                    const v18 = v12.split(a10);
                    try { v18.flatMap(eval); } catch (e) {}
                }
            }
            new C8(v7);
        }
        return 255;
    }
    return f3;
}
function f21(a22) {
    return a22;
}
Object.defineProperty(v1, Symbol.toPrimitive, { enumerable: true, get: f2, set: f21 });
for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
}
v1[589] = v1;
for (let i37 = -3, i38 = 10; i38--, i38;) {
}
gc();
