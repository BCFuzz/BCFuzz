const v2 = new Float64Array(1883);
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    let v11;
    try { v11 = Int32Array(1883); } catch (e) {}
    function f12() {
        return v2;
    }
    const v15 = new Int32Array(681);
    function f16(a17, a18, a19, a20) {
    }
    v15.map(f16);
    class C22 extends Uint32Array {
    }
    C22.toString = f16;
    Object.defineProperty(v2, v11, { configurable: true, get: Date, set: f12 });
    const v23 = C22.toString;
    v23.name = v23;
    for (let [i28, i29] = (() => {
            let v26 = 0;
            v26++;
            return [0, 10];
        })();
        i29--, i28 < i29;
        ) {
    }
}
const v36 = new F3();
const v37 = new F3(v36, v2, F3, v2);
new F3(v37, F3, v37, v36);
gc();
