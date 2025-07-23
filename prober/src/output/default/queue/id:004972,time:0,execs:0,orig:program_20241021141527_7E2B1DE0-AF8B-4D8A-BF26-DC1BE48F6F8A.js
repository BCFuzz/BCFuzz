const v0 = [-3,58634,1073741823,-1,-9007199254740991];
function f1(a2, a3) {
    return v0;
}
v0.constructor = f1;
try { v0.flat(); } catch (e) {}
const v7 = new Uint8ClampedArray(2502);
for (const v8 in v7) {
    const o9 = {
    };
    function f10() {
    }
    function f11(a12) {
        a12.f = a12;
        const v13 = [-2,256,-24303,581561964,29756204];
        v13[65536] = f10;
        v13[65536] = v13;
        return v13;
    }
    try { f11(v8); } catch (e) {}
    Object.defineProperty(o9, "a", { configurable: true, enumerable: true, get: f10, set: f11 });
    o9.a = v8;
}
gc();
