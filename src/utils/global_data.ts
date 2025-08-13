import config from "@payload-config";
import type { DataFromGlobalSlug, GlobalSlug } from "payload";
import { getPayload } from "payload";

import type { PayLoadData } from "@/utils/payloadUtil";
import { getPayLoadData } from "@/utils/payloadUtil";

async function fetchGlobalData<P extends DataFromGlobalSlug<GlobalSlug>>(
  page: GlobalSlug
): Promise<PayLoadData<P> | undefined> {
  const payload = await getPayload({ config });
  try {
    return await getPayLoadData<P>(async (locale) => {
      return (await payload.findGlobal({
        slug: page,
        locale,
        depth: 2,
      })) as P;
    });
  } catch (error) {
    console.error("Failed to fetch page data:", error);
    return undefined;
  }
}

export default fetchGlobalData;
