type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, others: string[] = []): string {
  return [
    cls,
    ...others.filter(Boolean),
    Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
}