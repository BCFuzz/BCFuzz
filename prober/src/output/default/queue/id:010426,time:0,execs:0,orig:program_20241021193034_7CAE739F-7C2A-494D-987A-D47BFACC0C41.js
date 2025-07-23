const v3 = new WeakSet();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
const v11 = new F5();
let v13 = 2;
++v13;
Array.__proto__ = v11;
v3.valueOf = Array;
eval("");
let v20 = 0;
v20++;
class C23 extends Int8Array {
}
for (let v24 = 0; v24 < 100; v24++) {
}
gc();
