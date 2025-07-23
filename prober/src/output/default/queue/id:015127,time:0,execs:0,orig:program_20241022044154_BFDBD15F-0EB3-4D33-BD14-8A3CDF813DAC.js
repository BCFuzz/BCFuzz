const v0 = [0.7155383294870727];
let v1 = -9007199254740991;
const v4 = ([v1,v1,v1])[128];
const v6 = new Int16Array(4096);
function f7(a8, a9) {
    v1--;
    const v11 = -a9;
    ~v1;
    const v13 = v11 ** v1;
    Object.defineProperty(a9, v0, { configurable: true, enumerable: true, value: v13 });
    for (const v14 of v6) {
    }
    return v13;
}
f7(v4, Int16Array);
gc();
