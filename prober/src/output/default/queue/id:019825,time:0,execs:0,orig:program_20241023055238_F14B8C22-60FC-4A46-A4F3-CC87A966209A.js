for (let v2 = 0; v2 < 5; v2++) {
    for (let i4 = 0;
        (() => {
            const v5 = i4 + i4;
            const v7 = i4 < 4;
            const v8 = [512,40606,-1,268435456];
            try { v8.slice(undefined); } catch (e) {}
            function f10() {
            }
            function f11(a12) {
                return a12;
            }
            Object.defineProperty(v8, "constructor", { get: f10, set: f11 });
            v8.splice(0, v5);
            return v7;
        })();
        i4++) {
    }
}
gc();
