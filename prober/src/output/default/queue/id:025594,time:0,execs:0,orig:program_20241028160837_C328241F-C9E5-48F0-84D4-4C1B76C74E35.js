const v1 = new Uint32Array();
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
                            for (let i22 = 0, i23 = 10;
                                i22 < i23;
                                (() => {
                                    const v28 = new Set();
                                    this.__proto__ = v28;
                                })()) {
                            }
                        }
                    `;
                    const v31 = v12.split(a10);
                    try { v31.flatMap(eval); } catch (e) {}
                }
            }
            new C8(v7);
        }
        return 255;
    }
    return f3;
}
function f34(a35) {
    return a35;
}
Object.defineProperty(v1, Symbol.toPrimitive, { enumerable: true, get: f2, set: f34 });
for (let i40 = 0, i41 = 10; i40 < i41; i41--) {
}
for (let i50 = -3, i51 = 10; i50 < i51; i51--) {
}
v1[589] = v1;
for (let i60 = -3, i61 = 10; i61--, i60 < i61;) {
}
gc();
