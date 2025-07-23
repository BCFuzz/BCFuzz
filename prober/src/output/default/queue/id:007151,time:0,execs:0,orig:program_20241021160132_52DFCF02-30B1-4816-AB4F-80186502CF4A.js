const v1 = new SharedArrayBuffer();
function f2() {
    class C3 {
        constructor(a5, a6) {
            for (let v7 = 0; v7 < 5; v7++) {
                function f10(a11, a12) {
                    const o13 = {
                        [a12]: a12,
                    };
                    return o13;
                }
                const v14 = f10(-3444, 3);
                f10().constructor.entries(v14);
            }
        }
    }
    new C3();
}
v1[Symbol.toPrimitive] = f2;
try { new Int32Array(v1, 11, v1); } catch (e) {}
gc();
