const v1 = new Set();
const v2 = [v1];
class C4 {
    constructor(a6, a7) {
        for (let v8 = 0; v8 < 100; v8++) {
            function F9(a11, a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                for (let v16 = 0; v16 < 25; v16++) {
                    function F17() {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                }
                for (let i21 = 0, i22 = 8;
                    v2 < i22;
                    (() => {
                        new Int32Array(a13, a6, v8);
                        i21++;
                    })()) {
                    a6 === i21;
                }
            }
            new F9();
        }
    }
}
new C4(1000000.0);
for (let i35 = 0, i36 = 10; i36--, i35 < i36;) {
}
gc();
