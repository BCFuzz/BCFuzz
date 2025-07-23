const v1 = new Map();
function f2() {
    return v1;
}
Object.defineProperty(v1, Symbol.split, { writable: true, configurable: true, enumerable: true, value: f2 });
const v5 = Symbol.split;
const v6 = v1[v5];
for (let v7 = 0; v7 < 250; v7++) {
    v6().has(v5);
}
gc();
