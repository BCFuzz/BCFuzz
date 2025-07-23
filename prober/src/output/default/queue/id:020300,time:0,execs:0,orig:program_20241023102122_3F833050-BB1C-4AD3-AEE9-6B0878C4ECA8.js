const v1 = [0.7155383294870727];
let v2 = -9007199254740991;
const v4 = [v2];
v4[128] = 11;
const v5 = v4[128];
const v7 = new Int16Array(4096);
function f8(a9, a10) {
    a9--;
    v2--;
    const v13 = -a10;
    ~v2;
    Object.defineProperty(a10, v1, { configurable: true, enumerable: true, value: v13 ** v2 });
    for (const v16 of v7) {
    }
    return Int16Array;
}
f8(v5, Int16Array);
gc();
