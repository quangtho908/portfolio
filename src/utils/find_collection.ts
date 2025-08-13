import config from "@payload-config";
import type { CollectionSlug, DataFromCollectionSlug } from "payload";
import { getPayload } from "payload";

import type { PayLoadData } from "@/utils/payloadUtil";
import { getPayLoadData } from "@/utils/payloadUtil";

export async function findCollectionBySlug<
  C extends DataFromCollectionSlug<CollectionSlug>,
>(
  slug: string,
  collection: CollectionSlug
): Promise<PayLoadData<C> | undefined> {
  const payload = await getPayload({ config });
  try {
    return await getPayLoadData<C>(async (locale) => {
      return (
        await payload.find({
          collection,
          locale,
          depth: 2,
          where: {
            slug: { equals: slug },
          },
        })
      ).docs[0] as C;
    });
  } catch (error) {
    console.error("Failed to fetch page data:", error);
    return undefined;
  }
}
