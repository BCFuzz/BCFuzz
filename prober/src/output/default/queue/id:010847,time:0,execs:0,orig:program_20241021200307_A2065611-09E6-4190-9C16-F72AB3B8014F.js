const v0 = [-482.3300120493641,4.0,-78175.28835917532,-342216.43944282224,1000000000000.0,0.6762356665976511];
const v1 = [0.2072042418414315,3.0,-1000000.0,2.0];
const o2 = {
    __proto__: v1,
};
Object.defineProperty(v1, 268435439, { value: v0 });
for (let i5 = 0, i6 = 10;
    i5 < i6;
    (() => {
        function f10() {
            const v11 = /u?/y;
            const v12 = v11.toString();
            const v14 = [];
            const v15 = v14.push(v12);
            const v17 = Reflect.apply(v11.compile, v11, v14);
            return v17.toString(v17, v15, v11, v0);
        }
        f10.call(i5, v1, i5);
        f10();
        i6--;
    })()) {
}
gc();
