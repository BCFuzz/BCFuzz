for (let v0 = 0; v0 < 25; v0++) {
    const v2 = createGlobalObject();
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        class C7 extends v2.constructor {
        }
        const v8 = C7.getOwnPropertyDescriptors(RegExp);
        v8.e = v8;
    }
    new F3();
}
gc();
