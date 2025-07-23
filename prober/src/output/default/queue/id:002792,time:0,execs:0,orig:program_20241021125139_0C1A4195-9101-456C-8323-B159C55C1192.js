const v1 = ([-9.794042680331625,NaN,-555.1860721122559,1000000.0,-1.0,0.3615809504474715,9.046121989344677]).toLocaleString();
for (let i = 0; i < 5; i++) {
    const o8 = {
        toString(a4, a5) {
            const v6 = a5?.constructor;
            try { v6(a4, a4); } catch (e) {}
        },
    };
    o8.toString(v1, "8");
    -o8;
}
gc();
