function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v5 = new F0(v4, v4);
const v6 = v4 ** v5;
let v8 = 1.7976931348623157e+308;
v8--;
Math.fround(v5);
v6 & v8;
for (let v12 = 0; v12 < 250; v12++) {
}
gc();
