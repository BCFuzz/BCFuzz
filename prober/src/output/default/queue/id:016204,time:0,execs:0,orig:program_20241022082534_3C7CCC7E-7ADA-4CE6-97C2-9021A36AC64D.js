function f0(a1, a2) {
    return a1;
}
function f3(a4) {
    return a4;
}
function f5(a6, a7) {
    const v9 = new Uint32Array(a6);
    return v9;
}
f3[Symbol.species] = f5;
const v12 = [38140,268435440,4294967295,-49121,-2,0,1494761775,-52509,-4096,7];
Object.defineProperty(v12, "constructor", { enumerable: true, value: f3 });
try { v12.filter(f0); } catch (e) {}
gc();
