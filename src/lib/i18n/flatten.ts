/**
 * Flattens a nested translations object into dot-notation key/value pairs.
 * Function values (like coverCount) are skipped — they're not editable strings.
 */
export interface TranslationEntry {
  key: string          // e.g. "covers.title"
  namespace: string    // e.g. "covers"
  field: string        // e.g. "title"
  defaultValue: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function walk(obj: Record<string, any>, prefix: string, out: TranslationEntry[]) {
  for (const [k, v] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${k}` : k
    if (typeof v === 'string') {
      const parts = fullKey.split('.')
      out.push({
        key: fullKey,
        namespace: parts.slice(0, -1).join('.') || 'root',
        field: parts[parts.length - 1],
        defaultValue: v,
      })
    } else if (typeof v === 'object' && v !== null && typeof v !== 'function') {
      walk(v, fullKey, out)
    }
    // skip functions (e.g. coverCount)
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function flattenTranslations(translations: Record<string, any>): TranslationEntry[] {
  const out: TranslationEntry[] = []
  walk(translations, '', out)
  return out
}

/**
 * Apply a flat overrides map back onto a nested translations object (deep clone + patch).
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function applyOverrides<T extends Record<string, any>>(base: T, overrides: Record<string, string>): T {
  // Deep clone (only plain objects/strings/numbers/functions — translations are shallow-ish)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function cloneDeep(v: any): any {
    if (typeof v === 'function') return v
    if (typeof v !== 'object' || v === null) return v
    const copy: Record<string, unknown> = {}
    for (const [k, val] of Object.entries(v)) copy[k] = cloneDeep(val)
    return copy
  }

  const result = cloneDeep(base) as T

  for (const [dotKey, value] of Object.entries(overrides)) {
    const parts = dotKey.split('.')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let cursor: any = result
    for (let i = 0; i < parts.length - 1; i++) {
      if (cursor[parts[i]] === undefined) break
      cursor = cursor[parts[i]]
    }
    const last = parts[parts.length - 1]
    if (last in cursor && typeof cursor[last] === 'string') {
      cursor[last] = value
    }
  }

  return result
}
