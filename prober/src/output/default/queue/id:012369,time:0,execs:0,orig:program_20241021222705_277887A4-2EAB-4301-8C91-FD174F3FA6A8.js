Object.defineProperty(Map, Symbol.toPrimitive, { enumerable: true, value: Date });
const v5 = new Map();
const v6 = [127,-14,1073741823,1641801041,-4294967295,536870912,6,4294967295];
function f7() {
    return 102 + Map;
}
v6[Symbol.toPrimitive] = f7;
(v5 + v6).at();
gc();
