class C0 {
    constructor(a2, a3) {
        for (let v4 = 0; v4 < 10; v4++) {
            for (let [i20, i21] = (() => {
                    const v8 = [a3,a3,a3];
                    function f10(a11, a12) {
                        const v14 = [];
                        return Reflect.apply(("b").matchAll, v8, v14);
                    }
                    Float64Array[Symbol.iterator] = f10;
                    new Float64Array(Float64Array);
                    return [0, 10];
                })();
                i20 < i21;
                i21--) {
            }
        }
    }
}
new C0();
gc();
