const v2 = new Date(1000);
const v4 = [1000,1000,[1000,v2]];
for (let v6 = 0; v6 < 50; v6++) {
    const o7 = {
        [v4]: 11,
    };
    v2.g *= v6;
    for (let v8 = 0; v8 < 5; v8++) {
    }
}
gc();
