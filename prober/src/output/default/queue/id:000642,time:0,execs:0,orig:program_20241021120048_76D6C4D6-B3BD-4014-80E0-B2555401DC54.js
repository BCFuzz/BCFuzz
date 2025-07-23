new Int16Array(4);
new BigUint64Array(5);
let v6 = 499;
v6++;
new Uint16Array(v6);
let v11 = 14;
v11--;
class C14 {
}
try { C14.constructor(C14); } catch (e) {}
3 / 3;
const v19 = new Uint16Array(3);
let v20;
try { v20 = v19.map(C14); } catch (e) {}
const v22 = new Int16Array(v19, 3, v20);
try { WeakMap(); } catch (e) {}
const v25 = new WeakMap(v20);
const v30 = [v22,v25[Symbol.split],[Int16Array,Int16Array,Int16Array]];
v30[1] = v30;
v25[v30];
gc();
