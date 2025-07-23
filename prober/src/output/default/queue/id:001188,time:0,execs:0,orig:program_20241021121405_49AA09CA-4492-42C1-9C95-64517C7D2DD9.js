function f1(a2) {
    const v6 = new Uint8ClampedArray(256);
    new Uint16Array(...v6);
}
Date[Symbol.toPrimitive] = f1;
class C10 extends Date {
}
const v11 = new C10();
function f12(a13, a14) {
}
v11.toString = f12;
class C15 {
}
const v16 = new C15();
v16.propertyIsEnumerable(Date);
const v18 = [-4.0,-1000000000000.0,0.0,-255926.1388551552];
v18[1];
function f20(a21, a22) {
    return v18;
}
for (let v23 = 0; v23 < 500; v23++) {
}
gc();
