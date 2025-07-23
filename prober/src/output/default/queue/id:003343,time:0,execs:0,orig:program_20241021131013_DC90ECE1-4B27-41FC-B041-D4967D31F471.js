function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v2;
    this.a = F0;
}
const v8 = new F4();
const v9 = [-2.0,-Infinity,8.748200483711564,-1.0,-2.0];
const v10 = [5.0,0.8978981330824356,-8.246953746140717,7.675263273257794,-2.2250738585072014e-308,-1.4061778759071785e+308];
[v9];
const v12 = [v10];
v12[0] = v12;
v12[0] = v12;
const o13 = {
};
const o14 = {
};
class C16 {
}
const o17 = {
    "set": Date,
};
const v19 = new Proxy(Date, o17);
v19.apply = v19;
class C20 extends C16 {
}
try { C20.apply(F4, v8); } catch (e) {}
for (let v22 = 0; v22 < 500; v22++) {
    v22++;
    v22--;
}
gc();
