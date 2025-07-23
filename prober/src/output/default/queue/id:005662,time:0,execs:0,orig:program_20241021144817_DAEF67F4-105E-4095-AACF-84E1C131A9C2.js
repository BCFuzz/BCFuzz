const v1 = [731203717];
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = ["-4294967297","-4294967297"];
    function f11() {
        return a7;
    }
    v10.toString = f11;
    const v12 = ["-4294967297",v10];
    for (let v13 = 0; v13 < 5; v13++) {
        class C14 {
            [v12] = v13;
        }
    }
}
const v15 = new F3();
const v16 = v15.constructor;
try { new v16(731203717, v1, BigInt64Array); } catch (e) {}
gc();
