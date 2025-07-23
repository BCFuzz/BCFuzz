const v5 = new Float64Array(1883);
try { v5.with(Float64Array, Float64Array); } catch (e) {}
const v9 = new Uint16Array(156);
try { v9.copyWithin(Float64Array, Uint16Array); } catch (e) {}
new Uint32Array(10);
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    Uint32Array.prototype = Uint32Array;
    try { Int32Array.from(this); } catch (e) {}
    let v23;
    try { v23 = Int32Array(); } catch (e) {}
    function f24() {
        return f24;
    }
    try { f24(); } catch (e) {}
    class C26 extends f24 {
    }
    try { C26(); } catch (e) {}
    class C28 extends C26 {
    }
    const v29 = new C28();
    try { v29.call(a19); } catch (e) {}
    const v31 = new Int32Array();
    let v32;
    try { v32 = v31.sort(v23); } catch (e) {}
    try { v32.sort(v32); } catch (e) {}
    class C34 extends Uint32Array {
    }
    const v35 = C34?.toString;
    try { new v35(); } catch (e) {}
    const v39 = new Float64Array();
    v39[0] = v39;
    const v41 = [536870889,-11,-2,536870888];
    try { v41.concat(C34, v41); } catch (e) {}
    [1073741823,60812];
    const o45 = {
    };
    const v47 = new ArrayBuffer(236, o45);
    const v49 = new Uint8Array(v47);
    class C50 {
    }
    try { C50(v49); } catch (e) {}
    for (let [i56, i57] = (() => {
            10 * 10;
            return [0, 10];
        })();
        (() => {
            i56 & i56;
            const v59 = i56 < i57;
            v59 || v59;
            return v59;
        })();
        i56++, i57--) {
        i56 / i56;
        i56 /= 8;
        for (let v68 = 0; v68 < 10; v68++) {
        }
    }
    function f69() {
        return F14;
    }
}
const v70 = new F14();
v70.length = v70;
const v71 = new F14();
const v72 = new F14(F14, F14, v71, v70);
v72.length;
gc();
