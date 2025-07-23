function f2() {
    const v4 = ("-789426228").constructor;
    v4.call(v4, "-789426228", 12);
    v4.fromCharCode(12);
}
const v8 = new Uint16Array(1000);
v8["some"](f2);
gc();
