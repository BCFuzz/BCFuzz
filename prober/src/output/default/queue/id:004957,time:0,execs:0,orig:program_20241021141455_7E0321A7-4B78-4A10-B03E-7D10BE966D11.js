class C1 {
}
const v2 = new C1();
function f3() {
    gc();
}
Object.defineProperty(v2, "toString", { value: f3 });
const t7 = v2.constructor;
const v7 = new t7();
Object.defineProperty(v7, "constructor", { writable: true, value: f3 });
v7.constructor();
("").replaceAll(0.8248397415242672, v2);
gc();
