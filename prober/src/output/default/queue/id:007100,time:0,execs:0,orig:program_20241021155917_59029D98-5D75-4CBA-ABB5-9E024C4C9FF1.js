const v2 = new ArrayBuffer();
function f3(a4) {
    a4();
    return v2;
}
v2[Symbol.toPrimitive] = f3;
const v8 = [-515125.51736979105];
try { v8.indexOf(ArrayBuffer, v2); } catch (e) {}
gc();
