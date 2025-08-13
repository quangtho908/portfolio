import config from "@payload-config";
import type { CollectionSlug, DataFromCollectionSlug, Where } from "payload";
import { getPayload } from "payload";

import type { PayLoadData } from "@/utils/payloadUtil";
import { getPayLoadData } from "@/utils/payloadUtil";

async function fetchCollectionData<
  C extends DataFromCollectionSlug<CollectionSlug>,
>(
  collection: CollectionSlug,
  page: number = 1,
  limit: number = 10,
  where?: Where
): Promise<PayLoadData<C[]> | undefined> {
  const payload = await getPayload({ config });
  try {
    return await getPayLoadData<C[]>(async (locale) => {
      return (
        await payload.find({
          collection,
          locale,
          depth: 2,
          page,
          limit,
          where,
        })
      ).docs as C[];
    });
  } catch (error) {
    console.error("Failed to fetch page data:", error);
    return undefined;
  }
}

export default fetchCollectionData;
