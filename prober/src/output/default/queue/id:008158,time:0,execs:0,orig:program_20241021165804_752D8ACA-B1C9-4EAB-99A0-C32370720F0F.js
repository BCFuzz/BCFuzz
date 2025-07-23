function f2(a3) {
    a3.toString = f2;
    const o9 = {
        o(a5) {
            Object.defineProperty([a3,a5,this,a5], Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f2 });
            return a3;
        },
    };
    return o9;
}
const v10 = f2(1000.0);
const v11 = f2(v10);
v11.toString = f2;
let v12;
try { v12 = v11.o(v10); } catch (e) {}
const v16 = new BigUint64Array();
v16.slice(Float64Array);
const t16 = v12.constructor;
const v19 = new t16(1000.0, -10, -10);
try { v19.toExponential(v11); } catch (e) {}
gc();
