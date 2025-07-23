class C1 {
}
const t2 = C1.constructor;
t2("cause");
const o4 = {
};
for (let v5 = 0; v5 < 5; v5++) {
    const o6 = {
    };
    const v8 = new Proxy(o4, o6);
    v8.h = v8;
}
gc();
