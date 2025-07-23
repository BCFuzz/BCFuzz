let v2 = Float32Array;
function f3(a4) {
    return 5.0;
}
Object.defineProperty(v2, "valueOf", { writable: true, value: f3 });
const v5 = new v2(1024);
for (const v6 in v5) {
    v2++;
}
gc();
