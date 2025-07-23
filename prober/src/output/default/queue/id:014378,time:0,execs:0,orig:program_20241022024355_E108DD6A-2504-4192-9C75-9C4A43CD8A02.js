new Float64Array();
Float64Array.name = Float64Array;
const v5 = new Float64Array();
try { Uint8ClampedArray.from(); } catch (e) {}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.toLocaleString();
    this.b = a12;
    this.a = 1;
}
const v14 = new F9(1, 1);
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    a18 - a18;
    ~a19;
    this.c = a18;
}
const v23 = new F15(v14, v5, 1);
const v24 = v23.__defineSetter__;
try { new v24(); } catch (e) {}
const v26 = /0Ti\ud808\udf45*/mvg;
let v27;
try { v27 = v26(); } catch (e) {}
const v28 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
Object.defineProperty(v28, "set", { configurable: true, enumerable: true, get: v27 });
function f29(a30, a31) {
    Reflect.defineProperty(Uint8Array, a30, v28);
}
f29.call(v28, v27);
gc();
