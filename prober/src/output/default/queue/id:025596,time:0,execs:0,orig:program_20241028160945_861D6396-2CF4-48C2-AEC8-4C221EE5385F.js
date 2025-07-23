const v1 = new Uint32Array(Uint32Array, Uint32Array, Uint32Array);
function f2() {
    function f3() {
        const v6 = new Int8Array(255);
        for (const v7 in v6) {
            class C8 {
                constructor(a10) {
                    const v12 = `
                        /\u{12345}/myvis;
                        function F14(a16, a17, a18, a19) {
                            if (!new.target) { throw 'must be called with new'; }
                            for (let [i25, i26] = (() => {
                                    function f20(a21, a22) {
                                        return a21;
                                    }
                                    return [0, 10];
                                })();
                                i25 < i26;
                                ) {
                            }
                        }
                    `;
                    const v32 = v12.split(a10);
                    try { v32.flatMap(eval); } catch (e) {}
                }
            }
            new C8(v7);
        }
    }
    return f3;
}
function f35(a36) {
    return f35;
}
Object.defineProperty(v1, Symbol.toPrimitive, { enumerable: true, get: f2, set: f35 });
for (let i41 = 0, i42 = 10; i41 < i42; i42--) {
}
v1[589] = v1;
for (let i51 = -3, i52 = 10; i52--, i52;) {
}
gc();
