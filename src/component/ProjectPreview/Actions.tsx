'use client'

import AppButton from "@/component/common/AppButton";
import {ExternalLink} from "lucide-react";

type Props = {
  project: Project
}

export default function Actions({project}: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <AppButton
        onClick={() => {
          window.open(project.url, '_blank')
        }}
        title={"Visit Live Site"}
        icon={<ExternalLink className="w-4 h-4"/>}
        className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
      />
    </div>
  )
}