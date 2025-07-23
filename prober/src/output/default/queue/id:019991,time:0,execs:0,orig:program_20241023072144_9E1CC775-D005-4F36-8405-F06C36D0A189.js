const v1 = Date();
let v3;
try { v3 = Uint16Array.apply(Date, Uint16Array); } catch (e) {}
const v4 = Date.constructor;
try { v4(v3, v3, v1); } catch (e) {}
gc();
