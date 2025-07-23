let v1 = Uint8Array;
for (let v2 = 0; v2 < 32; v2++) {
    v1["p" + v2] = v2;
}
const v5 = new v1(3115);
v1 %= v1;
try { v5.map(noInline, v5); } catch (e) {}
const v10 = Date();
function F13() {
    if (!new.target) { throw 'must be called with new'; }
}
const v15 = new F13();
const v16 = new F13();
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a19;
    this.f = a19;
    this.e = v10;
}
const v21 = new F17(3115, v1);
new F17(v21, 128);
const v23 = new F17(Int32Array, 9);
const v25 = [1.6108883737384262e+308,v16];
function f27() {
    const o28 = {
    };
}
const v29 = f27();
let v31 = 1005984348;
let v34 = v23 | (915999.996287779 - v31);
v34--;
--v34;
--v31 || v31;
("c")[0];
("c")[1];
("c")[2];
v29 % v25;
Object.defineProperty(v15, 129, { configurable: true, get: f27 });
gc();
