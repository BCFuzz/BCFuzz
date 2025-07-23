const v2 = new Set();
try { v2.forEach(); } catch (e) {}
const v4 = [1000000.0,Infinity,-905874.1501267307,0.7252605056964067,-0.0,2.2250738585072014e-308,0.31775135766944107,-0.0];
const v5 = v4?.constructor;
try { new v5(-432105.635044066); } catch (e) {}
const v7 = v4.values();
try { v7.next(); } catch (e) {}
const v12 = new Int32Array(8, 8, 8);
v12.byteOffset;
gc();
