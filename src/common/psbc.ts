// https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)
// pSBC - Shade Blend Convert - Version 4.0 - 02/18/2019

export const pSBC = (p: number, c0: string, c1 = '', l = true) => {
  let r,
    g,
    b,
    P,
    f,
    t,
    h,
    a,
    i = parseInt,
    m = Math.round;
  if (p < -1) p = -1;
  else if (p > 1) p = 1;
  const pSBCr = (d: string) => {
    let n = d.length,
      x = { r: 0, g: 0, b: 0, a: 0 };
    let e;
    if (n < 6) d = '#' + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : '');
    e = i(d.slice(1), 16);
    if (n == 9 || n == 5)
      (x.r = (e >> 24) & 255), (x.g = (e >> 16) & 255), (x.b = (e >> 8) & 255), (x.a = m((e & 255) / 0.255) / 1000);
    else (x.r = e >> 16), (x.g = (e >> 8) & 255), (x.b = e & 255), (x.a = -1);
    return x;
  };
  (h = c0.length > 9),
    (h = a ? (c1.length > 9 ? true : c1 == 'c' ? !h : false) : h),
    (f = pSBCr(c0)),
    (P = p < 0),
    (t = c1 && c1 != 'c' ? pSBCr(c1) : P ? { r: 0, g: 0, b: 0, a: -1 } : { r: 255, g: 255, b: 255, a: -1 }),
    (p = P ? p * -1 : p),
    (P = 1 - p);
  if (l) (r = m(P * f.r + p * t.r)), (g = m(P * f.g + p * t.g)), (b = m(P * f.b + p * t.b));
  else
    (r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5)),
      (g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5)),
      (b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5));
  (a = f.a), (t = t.a), (f = a >= 0 || t >= 0), (a = f ? (a < 0 ? t : t < 0 ? a : a * P + t * p) : 0);
  if (h) return 'rgb' + (f ? 'a(' : '(') + r + ',' + g + ',' + b + (f ? ',' + m(a * 1000) / 1000 : '') + ')';
  else
    return (
      '#' +
      (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0)).toString(16).slice(1, f ? undefined : -2)
    );
};
