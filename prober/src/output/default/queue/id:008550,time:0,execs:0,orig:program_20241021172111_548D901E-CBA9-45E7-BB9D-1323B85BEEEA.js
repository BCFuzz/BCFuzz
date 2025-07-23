function f0() {
    return f0;
}
const v2 = new WeakSet();
function f3() {
    return WeakSet;
}
const v4 = f3(f0, v2);
const v5 = f3();
f3();
const v9 = [];
Reflect.construct(f3, v9, f3);
let [v11,v12] = v9;
const v13 = Array(v12);
v13[5] = v13;
function f14(a15, a16, a17, a18) {
    return v12;
}
f14(v5, v5, v5, v5);
f14(v4, v4, v5);
function f21() {
    return f3;
}
class C22 extends f21 {
}
for (const v24 in [-47246,6,-6,65537]) {
    for (let v25 = 0; v25 < 100; v25++) {
    }
}
gc();
