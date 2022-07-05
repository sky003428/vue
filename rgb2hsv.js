export default function rgb2hsv(arr) {
    let rr;
    let gg;
    let bb;
    let r = arr[0] / 255;
    let g = arr[1] / 255;
    let b = arr[2] / 255;
    let h;
    let s;
    let v = Math.max(r, g, b);
    let diff = v - Math.min(r, g, b);
    let diffc = function (c) {
        return (v - c) / 6 / diff + 1 / 2;
    };

    if (diff === 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(r);
        gg = diffc(g);
        bb = diffc(b);

        if (r === v) {
            h = bb - gg;
        } else if (g === v) {
            h = (1 / 3) + rr - bb;
        } else if (b === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(v * 100)]
};

 