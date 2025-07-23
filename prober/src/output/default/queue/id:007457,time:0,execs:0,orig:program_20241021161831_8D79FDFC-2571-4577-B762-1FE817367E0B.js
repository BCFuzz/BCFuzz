const v2 = new Int16Array();
const v3 = new Int16Array();
function f4() {
    return -393307635;
}
v3[Symbol.toPrimitive] = f4;
const v8 = [v3];
Reflect.apply(v3.copyWithin, v2, v8);
gc();
