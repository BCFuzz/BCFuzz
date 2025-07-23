function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 16;
}
new F0();
new F0();
const v5 = new F0();
v5.b = v5;
let v7 = -1364853609n;
v7--;
-4294967296n << -4294967296n;
new Int8Array(3467);
const v16 = new Uint8Array(257);
v16[185];
const v20 = new Float64Array(5);
const v21 = [3.0,-1000000.0,-1.7976931348623157e+308,2.0];
function F24(a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    with (a27) {
        const v31 = new BigUint64Array(586);
        for (const v32 of v31) {
            v32 | v32;
        }
    }
}
try { F24.toString(); } catch (e) {}
const v35 = new F24(F24, -48245n);
const v36 = v35?.constructor;
class C37 {
}
const v39 = new Float32Array(C37, Float32Array);
const v41 = Proxy.revocable(v39, C37);
v41.proxy = v41;
try { new v36(257, 3467, v35); } catch (e) {}
const v43 = new F24(-5, v21);
const v44 = v43?.constructor;
try { new v44(v20, v35, v35); } catch (e) {}
gc();
