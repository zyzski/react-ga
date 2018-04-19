import toTitleCase from './toTitleCase';

export default function format(s, titleCase) {
  if (titleCase) {
    return toTitleCase(s);
  }

  return s;
}
