const v1 = [-949.4940218630379,-213248.6132863816,1.7016943408240058e+308,0.6886108899310851,-5.0];
let v2;
try { v2 = v1.forEach(ArrayBuffer); } catch (e) {}
const v3 = [-482.3300120493641,4.0,-78175.28835917532,-342216.43944282224,1000000000000.0,0.6762356665976511];
const v4 = [0.2072042418414315,3.0,-1000000.0,2.0];
const o5 = {
    __proto__: v4,
};
Object.defineProperty(v4, 268435439, { value: v3 });
for (let i8 = 0, i9 = 10;
    i8 < i9;
    (() => {
        function f13() {
            const v15 = ([f13]).fill();
            try { v15.forEach(i8, v3, v2, v2); } catch (e) {}
            return v4;
        }
        f13.call(i9, ArrayBuffer, v1, i8, f13);
        i9--;
    })()) {
}
gc();
