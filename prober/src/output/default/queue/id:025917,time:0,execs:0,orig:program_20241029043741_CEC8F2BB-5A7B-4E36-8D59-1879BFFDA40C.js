function f1() {
    return -3.0;
}
const v2 = [-666.0974781919775,1000.0];
function f3() {
    return f1;
}
Object.defineProperty(v2, "toString", { enumerable: true, get: f3 });
const v4 = [303537114,-4294967297,1000];
const v5 = [-1,9,4294967296,65536,10,49592,10];
v5[9] = v2;
const v8 = [];
const v10 = Reflect.apply(v4.sort, v5, v8);
const v11 = v10.join(v10);
const v13 = new Uint16Array(v4);
const v15 = v13["sort"]();
Object.defineProperty(v15, "constructor", { value: Date });
const t17 = v15.constructor;
new t17(v11);
gc();
