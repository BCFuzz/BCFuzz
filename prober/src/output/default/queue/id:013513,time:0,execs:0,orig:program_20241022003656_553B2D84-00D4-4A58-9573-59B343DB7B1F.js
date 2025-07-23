createGlobalObject[Symbol.species] = createGlobalObject;
for (let i5 = 0, i6 = 10;
    i6--, i5 < i6;
    (() => {
        const v11 = [536870887,4,268435440];
        v11.constructor = createGlobalObject;
        try { v11.concat(v11, Symbol); } catch (e) {}
    })()) {
}
gc();
