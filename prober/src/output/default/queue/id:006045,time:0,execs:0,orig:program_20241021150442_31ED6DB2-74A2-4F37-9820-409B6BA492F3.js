const v1 = ([]).prototype;
let v2;
try { v2 = v1.has(v1); } catch (e) {}
const v4 = new Uint16Array();
try { v4.set(v2); } catch (e) {}
gc();
