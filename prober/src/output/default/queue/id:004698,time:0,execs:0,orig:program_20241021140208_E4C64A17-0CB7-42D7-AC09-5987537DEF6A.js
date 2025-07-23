function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -9180;
    this.f = -9180;
    this.c = -9180;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v5,v3];
v6[1];
const v9 = [v4,v5,[v6]];
let v10;
try { v10 = v9.toLocaleString(); } catch (e) {}
v10.length = v10;
try { WeakMap.call(v9); } catch (e) {}
const v13 = new WeakMap();
const v14 = v13?.__lookupSetter__;
try { new v14(v10); } catch (e) {}
const v16 = v13?.has;
v16.d = v16;
try { new v16(v13); } catch (e) {}
let v18 = 1;
v18++;
4294967296 >>> 4294967296;
~1000;
class C29 {
    constructor(a31, a32, a33, a34) {
        try { this.toString(); } catch (e) {}
        for (let i = 0; i < 25; i++) {
            const o37 = {
            };
            function f38() {
            }
        }
    }
}
gc();
