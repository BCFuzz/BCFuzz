const v2 = new Uint8ClampedArray(2502);
for (const v3 in v2) {
    const o4 = {
    };
    function f5() {
        return v3;
    }
    function f6(a7) {
        const o8 = {
            [o4]: o4,
        };
        const v9 = [-2,256,-24303,581561964,29756204];
        v9[4] = v9;
        return a7;
    }
    Object.defineProperty(o4, "a", { configurable: true, enumerable: true, get: f5, set: f6 });
    o4.a = v3;
}
gc();
