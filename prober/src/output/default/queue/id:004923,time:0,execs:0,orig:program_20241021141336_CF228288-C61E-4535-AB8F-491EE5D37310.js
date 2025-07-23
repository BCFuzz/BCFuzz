function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v6 = ([9223372036854775807,-1172111492,4294967297,8])[1073741824];
([1535927747,-3775,257,1,7]).f;
const v9 = `
    let v10 = 0;
    while ((() => {
            const v12 = v10 < 4;
            !v12;
            return v12;
        })()) {
        [-1.0,0.6095596292886831,-1000000000.0,-1000000000000.0,71308.53739991016];
        [0.125100464728794,-1.0,0.0];
        v10++;
        function F17(a19, a20) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F17(v6, v4);
    }
`;
eval(v9);
gc();
