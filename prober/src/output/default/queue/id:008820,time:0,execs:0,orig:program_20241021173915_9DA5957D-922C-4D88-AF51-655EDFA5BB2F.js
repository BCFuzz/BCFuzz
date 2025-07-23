function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 12;
}
class C3 extends F0 {
}
const v4 = new C3();
const v6 = new SharedArrayBuffer();
function f7() {
    class C8 {
        constructor(a10, a11) {
            for (let v12 = 0; v12 < 5; v12++) {
                function f13(a14, a15) {
                    const o16 = {
                    };
                    return o16;
                }
                f13().constructor.entries(v4);
                const v21 = new WeakSet();
                const v22 = v21.add(v21);
                const v25 = new Int8Array(255);
                for (const v26 in v25) {
                    new ArrayBuffer(v22);
                    for (let i30 = ArrayBuffer, i31 = 10; i30 < i31; i31--) {
                    }
                }
            }
        }
    }
    new C8();
}
v6[Symbol.toPrimitive] = f7;
try { new Int32Array(v6, 11, v6); } catch (e) {}
gc();
