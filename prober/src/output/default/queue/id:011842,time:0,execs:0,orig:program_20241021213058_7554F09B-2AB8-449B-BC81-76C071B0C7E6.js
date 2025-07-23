function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -9007199254740991;
}
new F0();
new F0();
const v5 = new F0();
v5.g = v5;
new Int32Array(3365);
Date.toString = Date;
const v11 = new Date(Date);
const v12 = v11.setUTCSeconds();
v12 | v12;
new Uint8Array(10);
const v16 = [-11,4096,10000,-839553715,2298,1317756020,256,64,-1864247364,-268435456];
const v17 = v16.splice;
try { v17.call(v5); } catch (e) {}
function f19(a20) {
    try { v5.trimRight(a20, a20, a20); } catch (e) {}
    function f22() {
        for (let v23 = 0; v23 < 10; v23++) {
            v23 >>> v23;
            const v27 = new Map();
            const v28 = v27.set(WeakMap);
            try { v28.entries(); } catch (e) {}
            new WeakMap(v27);
        }
        return f22;
    }
    f22();
    f22();
    f22();
    return 10;
}
try { f19(F0); } catch (e) {}
v17.toString = f19;
const v35 = v17.bind(v17);
v35.g = v35;
try { v35(v17, v17, v16, v17); } catch (e) {}
5 - 5;
new Uint8ClampedArray(5);
class C42 extends Map {
}
new C42();
gc();
