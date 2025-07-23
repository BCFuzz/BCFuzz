const v2 = new Float32Array(7, 7);
class C3 {
}
const v4 = new C3();
let v5;
try { v5 = v4.constructor(7); } catch (e) {}
const v7 = [7,v5];
Reflect.apply(v2.fill, v2, v7);
gc();
