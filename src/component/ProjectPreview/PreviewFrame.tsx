'use client'
import {Monitor, Smartphone, Tablet} from "lucide-react";
import {useState} from "react";

type ViewMode = "desktop" | "tablet" | "mobile";

const viewPort = {
  desktop: "h-screen",
  tablet: "w-[820px] h-[1180px] py-15 px-3 rounded-2xl bg-tapa-900 my-5",
  mobile: "w-[390px] h-[844px] py-10 px-3 rounded-3xl bg-tapa-900 my-5"
}

type Props = {
  project: Project
}

export default function PreviewFrame({project}: Props) {
  const [view, setView] = useState("desktop" as ViewMode)

  const changeView = (viewMode: ViewMode) => {
    setView(viewMode)
  }

  return (
    <div>
      <header className="py-4 bg-international-orange-500 hidden sm:block">
        <div className="flex justify-center items-center gap-5">
          <div className={`p-2 ${view == "desktop" ? "bg-tapa-50 rounded-md" : ""}`}>
            <Monitor
              size={35}
              className={`cursor-pointer ${view == "desktop" ? "text-tapa-800" : "text-tapa-100"}`}
              onClick={() => changeView("desktop")}
            />
          </div>
          <div className={`p-2 ${view == "tablet" ? "bg-tapa-50 rounded-md" : ""}`}>
            <Tablet
              size={35}
              className={`cursor-pointer ${view == "tablet" ? "text-tapa-800" : "text-tapa-100"}`}
              onClick={() => changeView("tablet")}
            />
          </div>
          <div className={`p-2 ${view == "mobile" ? "bg-tapa-50 rounded-md" : ""}`}>
            <Smartphone
              size={35}
              className={`cursor-pointer ${view == "mobile" ? "text-tapa-800" : "text-tapa-100"}`}
              onClick={() => changeView("mobile")}
            />
          </div>
        </div>
      </header>
      <div className={`${viewPort[view]} mx-auto duration-300`}>
        <iframe src={project.url} className="h-full w-full border bg-white"></iframe>
      </div>
    </div>
  )
}