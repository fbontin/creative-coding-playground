
export const range = (a: number, b: number, step = 1) => {
  const r: number[] = [];
  for (let i = a; i <= b; i += step) {
    r.push(i);
  }
  return r;
};

export const combine = (a1: number[], a2: number[]): [number, number][] => {
  return a1.flatMap(n1 => a2.map((n2: number): [number, number] => [n1, n2]));
}
