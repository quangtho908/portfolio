export interface PayLoadData<T> {
  en: T;
  vi: T;
}

export async function getPayLoadData<T>(
  fetcher: (locale: "en" | "vi") => Promise<T>
) {
  return {
    en: await fetcher("en"),
    vi: await fetcher("vi"),
  };
}
