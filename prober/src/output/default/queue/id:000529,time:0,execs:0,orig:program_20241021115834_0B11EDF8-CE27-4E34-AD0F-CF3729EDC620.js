function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this.constructor;
    try { new v10("h"); } catch (e) {}
    this.d = F0;
    this.g = a9;
    this.c = a8;
}
new F6(v2, v2);
new F6(v2, v2);
new WeakSet();
new Set();
const v19 = [1000000.0,Infinity,-905874.1501267307,0.7252605056964067,-0.0,2.2250738585072014e-308,0.31775135766944107,-0.0];
v19.at(v19);
const v21 = v19.constructor;
try { v21(); } catch (e) {}
try { v21(-432105.635044066); } catch (e) {}
const v25 = v19.values().next();
v25.g = v25;
new Int32Array("number", "number", "h");
const v29 = new Int32Array(8, 8);
v29.byteOffset;
gc();
