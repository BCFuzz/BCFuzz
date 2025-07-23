const o2 = {
};
Object.defineProperty(o2, "length", { configurable: true, enumerable: true, value: o2 });
function f3(a4, a5, a6, a7) {
    const o8 = {
        [a4]: a7,
    };
    return o8;
}
const v11 = f3("string", f3(), "a", o2)["string"];
Object.defineProperty(v11, "length", { writable: true, value: v11 });
gc();
