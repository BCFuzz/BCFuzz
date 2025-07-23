for (let v0 = 0; v0 < 250; v0++) {
    const v1 = [v0];
    function f2() {
    }
    f2[Symbol.species] = f2;
    v1.constructor = f2;
    v1.concat();
}
gc();
