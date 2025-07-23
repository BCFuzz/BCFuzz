const v0 = [];
for (let v2 = 0; v2 < 5; v2++) {
    const v3 = new Map(v0);
    function f4(a5) {
        for (let [i44, i45] = (() => {
                class C7 {
                }
                function f8() {
                    for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
                        const v19 = [-482.3300120493641,4.0,-78175.28835917532,-342216.43944282224,1000000000000.0,0.6762356665976511];
                        const v20 = [0.2072042418414315,3.0,-1000000.0,2.0];
                        const o21 = {
                            __proto__: v20,
                        };
                        Object.defineProperty(v20, 268435439, { value: v19 });
                    }
                    return 0;
                }
                const v22 = new C7();
                function f23(a24, a25) {
                    const v27 = new Float32Array();
                    v27.constructor = f23;
                    v27.subarray(a25, v2);
                    return v27;
                }
                f23[Symbol.species] = f8;
                v22.constructor = f23;
                const v31 = v22.constructor;
                for (let v32 = 0; v32 < 5; v32++) {
                    function F33(a35, a36, a37) {
                        if (!new.target) { throw 'must be called with new'; }
                        const o38 = {
                        };
                        Reflect.ownKeys(o38);
                    }
                    new F33(v32, F33, v22);
                }
                try { v31(); } catch (e) {}
                return [0, 10];
            })();
            i44 < i45;
            i45--) {
        }
        return a5;
    }
    v3.valueOf = f4;
    v3 + v0;
}
gc();
