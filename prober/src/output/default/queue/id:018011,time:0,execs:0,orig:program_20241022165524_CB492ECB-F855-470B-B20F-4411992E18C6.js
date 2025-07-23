function f1(a2) {
    const o4 = {
    };
    const t3 = o4.constructor;
    return t3(-0.7022778215310126).toFixed();
}
Object.defineProperty(Array, "toString", { configurable: true, enumerable: true, value: f1 });
const v8 = Array(Array);
v8[186] = Array;
v8.splice(v8);
gc();
