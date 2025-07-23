function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
class C3 extends F0 {
}
const v6 = new Int8Array(255);
for (const v7 in v6) {
    class C8 {
        constructor(a10) {
            const v12 = `
                const v14 = Symbol.toPrimitive;
                const o19 = {
                    [v14]() {
                        Reflect.deleteProperty(C3(), ...255);
                    },
                };
                /\u{12345}/myvis;
            `;
            const v21 = v12.split(a10);
            try { v21.flatMap(eval); } catch (e) {}
        }
    }
    new C8(v7);
}
gc();
