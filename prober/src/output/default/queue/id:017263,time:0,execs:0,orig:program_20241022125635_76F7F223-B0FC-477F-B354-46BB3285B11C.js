class C1 {
}
const v2 = ["8iCD",C1];
const o3 = {
};
o3.toJSON = v2;
for (let i7 = 0, i8 = 10; i7 < i8; i8--) {
    const v15 = Date();
    Object.defineProperty(JSON, "toJSON", { configurable: true, enumerable: true, value: o3 });
    JSON.stringify(JSON, JSON, v15);
}
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
gc();
