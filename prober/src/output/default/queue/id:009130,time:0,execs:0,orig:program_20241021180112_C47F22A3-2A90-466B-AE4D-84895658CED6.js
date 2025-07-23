const v1 = new SharedArrayBuffer(SharedArrayBuffer, SharedArrayBuffer);
function f2() {
    class C3 {
        constructor(a5, a6) {
            for (let v7 = 0; v7 < 5; v7++) {
                const o8 = {
                };
                o8.constructor.entries(this);
            }
        }
    }
    new C3();
    return v1;
}
v1[Symbol.toPrimitive] = f2;
try { new Int32Array(v1, 11, v1); } catch (e) {}
gc();
