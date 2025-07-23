let v0 = 0;
v0++;
const v4 = new Uint8ClampedArray(2502);
for (const v5 in v4) {
    const o6 = {
    };
    function f7() {
        return v0;
    }
    function f8(a9) {
        const o10 = {
            "d": v0,
            [o6]: o6,
        };
        const v11 = [-2,256,-24303,581561964,29756204];
        v11[65536] = v11;
        return a9;
    }
    Object.defineProperty(o6, "a", { configurable: true, enumerable: true, get: f7, set: f8 });
    o6.a = v5;
}
gc();
