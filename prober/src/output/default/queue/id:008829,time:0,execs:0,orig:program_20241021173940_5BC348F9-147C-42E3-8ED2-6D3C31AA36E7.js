const v1 = ["f"];
const v2 = ["f"];
try {
    Object.defineProperty(v1, "length", { enumerable: true, value: v2 });
} catch(e3) {
}
gc();
