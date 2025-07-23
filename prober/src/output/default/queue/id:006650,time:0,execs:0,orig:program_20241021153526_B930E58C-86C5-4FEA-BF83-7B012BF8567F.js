const v1 = new Uint32Array();
let v2;
try { v2 = v1.findLast(); } catch (e) {}
const v4 = this.constructor;
try { v4.entries(v2); } catch (e) {}
gc();
