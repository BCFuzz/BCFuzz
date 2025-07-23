for (let i2 = 0, i3 = 129; i2 < i3; i3--) {
}
for (let i12 = 0, i13 = 10; i13--, i12 < i13;) {
}
for (let i22 = 0, i23 = 10; i23; i23--) {
}
function F29(a31, a32, a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    const v35 = `
        function F36(a38, a39, a40, a41) {
            if (!new.target) { throw 'must be called with new'; }
        }
    `;
    v35.replace(/(?<=)(?:a*)*/gisu);
    for (let i46 = 0, i47 = 10; i46 < i47; i47--) {
    }
}
new F29(F29, 129, F29, 129);
gc();
