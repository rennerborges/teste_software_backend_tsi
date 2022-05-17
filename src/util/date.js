export function MomentSpeed(date) {
  return moment(date).locale('pt-br');
}

export function FormatDate(date, format) {
  return MomentSpeed(date).format(format);
}
