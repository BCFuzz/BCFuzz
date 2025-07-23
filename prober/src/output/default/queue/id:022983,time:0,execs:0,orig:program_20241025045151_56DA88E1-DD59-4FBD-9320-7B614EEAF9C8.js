const v0 = [44232,-256,2909,33526,1073741824,-1549799911,1024,3,-7,-56231];
function f1(a2) {
    const o30 = {
        __proto__: a2,
        get e() {
            for (const v4 of v0) {
                const v5 = v4 >> v4;
                for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
                    for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
                        const v26 = [-482.3300120493641,4.0,-78175.28835917532,-342216.43944282224,1000000000000.0,0.6762356665976511];
                        const v27 = [0.2072042418414315,3.0,-1000000.0,2.0];
                        const o28 = {
                            __proto__: v27,
                        };
                        Object.defineProperty(v27, 268435439, { value: v26 });
                    }
                }
                super[v5];
            }
            return this;
        },
    };
    return o30;
}
const v31 = f1(v0);
const v32 = f1();
const v33 = f1();
function F34(a36, a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    a38.e;
}
new F34(v32, v33, v31);
gc();
