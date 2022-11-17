const LOCK_SEPARATOR: string = '__';
const LOCK_LOCAL_ITEM_KEY = 'UNAVAILABLEDLCPERSONAS';

const serializeLockedDlc = (lockedDlc: string[]) => lockedDlc.join(LOCK_SEPARATOR);
const deserializeLockedDlc = (result: string|null) => result ? result.split(LOCK_SEPARATOR) : ([] as string[]);
export const getLockedDlc = () => deserializeLockedDlc(localStorage.getItem(LOCK_LOCAL_ITEM_KEY));
export const setLockedDlc = (lockedDlc: string[]) =>
    localStorage.setItem(LOCK_LOCAL_ITEM_KEY, serializeLockedDlc(lockedDlc));

export const serializeName = (s: string) => s.replaceAll(" ", "0").replaceAll("-", "1").replaceAll("'", "2");
export const deserializeName = (s: string) => s.replaceAll("0", " ").replaceAll("1", "-").replaceAll("2", "'");

export const getKeyOfValue = (o: {}, v: any) => Object.keys(o)[Object.values(o).findIndex(_ => v === _)];