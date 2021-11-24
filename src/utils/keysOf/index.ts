const keysOf = <T extends object>(o: T) => Object.keys(o) as (keyof typeof o)[];

export default keysOf;
