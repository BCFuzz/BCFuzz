function f0() {
    return f0;
}
const v1 = [-482.3300120493641,4.0,-78175.28835917532,-342216.43944282224,1000000000000.0,0.6762356665976511];
const v2 = [0.2072042418414315,3.0,-1000000.0,2.0];
const o3 = {
    __proto__: v2,
};
Object.defineProperty(v2, 268435439, { value: v1 });
for (let i6 = 0, i7 = 10;
    i6 < i7;
    (() => {
        function f11() {
            const v12 = /u?/y;
            v12[Symbol.toPrimitive] = f0;
            const v16 = [];
            Reflect.ownKeys(Reflect.apply(v12.compile, v12, v16));
            return Symbol;
        }
        f11.call(v2, i7, i7, f11);
        i7--;
    })()) {
}
gc();
