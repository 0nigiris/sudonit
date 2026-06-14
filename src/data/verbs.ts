// The identity. Verb -> its CSS tint variable + display label.
// Single source so cards/pages/sections stay consistent. The verb word itself is
// part of the identity (Fix · Teach · Build · Create); labels here are the EN
// canonical forms (localized display can come from i18n later if needed).

export const VERB_META = {
  fix:    { label: 'Fix',    tintVar: '--c-fix',    kind: 'service' },
  teach:  { label: 'Teach',  tintVar: '--c-teach',  kind: 'service' },
  build:  { label: 'Build',  tintVar: '--c-build',  kind: 'project' },
  create: { label: 'Create', tintVar: '--c-create', kind: 'project' },
} as const;

export type Verb = keyof typeof VERB_META;

/** CSS color value for a verb tint, e.g. tint('fix') -> "var(--c-fix)". */
export function tint(verb: Verb): string {
  return `var(${VERB_META[verb].tintVar})`;
}
