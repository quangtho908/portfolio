"use client";

import type { DefaultNodeTypes } from "@payloadcms/richtext-lexical";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import type { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";
import { RichText } from "@payloadcms/richtext-lexical/react";

const headingClass = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-md",
};

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  heading: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });
    return (
      <h4 className={`${headingClass[node.tag] || ""} font-bold`}>{text}</h4>
    );
  },
});

export default function RichTextContent({
  data,
}: {
  data: SerializedEditorState;
}) {
  return <RichText converters={jsxConverters} data={data} />;
}
