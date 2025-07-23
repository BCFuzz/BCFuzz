const o17 = {
    o(a1, a2) {
        const v3 = [303537114,-4294967297,1000];
        const v4 = [-1,-128,5,10,0,1073741824,-12,-15];
        const v7 = [a2,a2,a2,a2,a2];
        const v9 = Reflect.apply(v3.sort, v4, v7);
        const v10 = v9.join(v9);
        const v12 = new Uint16Array(v7, a1);
        const v14 = v12["sort"]();
        Object.defineProperty(v14, "constructor", { value: Date });
        const v15 = v14.constructor;
        new v15(v10);
        return v15;
    },
};
o17.o();
gc();
