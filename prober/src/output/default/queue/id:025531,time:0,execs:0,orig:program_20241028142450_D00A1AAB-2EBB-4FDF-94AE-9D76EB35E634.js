const v1 = new Uint32Array(Uint32Array, Uint32Array, Uint32Array);
function f2() {
    function f3() {
        const v6 = new Int8Array(255);
        for (const v7 in v6) {
            class C8 {
                constructor(a10) {
                    const v12 = `
                        /\u{12345}/myvis;
                        const t8 = [4294967296,7,-4294967296,-1,268435439,16,536870887,2147483649,9007199254740992];
                        t8.__proto__ = [2147483647,6,127,0,-9223372036854775807,0,-9223372036854775807];
                    `;
                    const v16 = v12.split(a10);
                    try { v16.flatMap(eval); } catch (e) {}
                }
            }
            new C8(v7);
        }
    }
    return f3;
}
function f19(a20) {
    return v1;
}
Object.defineProperty(v1, Symbol.toPrimitive, { enumerable: true, get: f2, set: f19 });
for (let i25 = 0, i26 = 10; i25 < i26; i26--) {
}
for (let i35 = -3, i36 = 10; i35 < i36; i36--) {
}
v1[589] = v1;
for (let i45 = -3, i46 = 10; i46--, i45 < i46;) {
}
gc();
