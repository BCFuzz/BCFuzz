const v2 = new Int32Array(10);
const v4 = new Float32Array(v2);
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i13 = 0, i14 = 10;
        (() => {
            i14--;
            class C16 {
                #toString(a18) {
                }
                constructor(a20) {
                    new Int16Array([-773.668189810663,-1.0,1000000000000.0,1.7976931348623157e+308,-601915.2742179928]);
                    const o25 = {
                        next() {
                            return v4;
                        },
                    };
                    try {
                        a20.#toString();
                    } catch(e27) {
                    }
                }
            }
            new C16();
            const v29 = new C16(v2);
            const v30 = v29.constructor;
            new v30(v29);
            const v32 = new v30(i13);
            const t22 = v32.constructor;
            new t22(v32);
            return i13 < i14;
        })();
        ) {
    }
}
new F5(Int32Array, v4, v4, 10);
gc();
