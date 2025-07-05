
import {redirect} from "next/navigation";
import ImageSlider from "@/component/ProjectPreview/ImageSlider";
import {Award, Calendar, Code, FolderOpen, User} from "lucide-react";
import Actions from "@/component/ProjectPreview/Actions";
import {Metadata} from "next";
type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = (await params).slug

  // fetch post information
  const res = await fetch(`${process.env.NEXT_SERVER_HOST}/api/posts/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    cache: "force-cache"
  });
  const {project} = await res.json();
  return {
    title: `Info Project ${project.name}`,
    description: project.description,
  }
}

export default async function DetailProject({ params }: Props) {
  const {slug} = await params;
  const res = await fetch(`${process.env.NEXT_SERVER_HOST}/api/posts/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    cache: "force-cache"
  });
  const {project} = await res.json();
  if(!res.ok) {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Info Project {project.name}</h1>
          <p className="text-lg text-gray-600">Showcasing my development projects and achievements</p>
        </div>

        {/* Project Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          {/* Image Slider */}
          <div className="p-8 pb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{project.name}</h2>

            {/* Slider Container */}
            <ImageSlider project={project} />

            {/* Project Info */}
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4"/>
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4"/>
                <span>{project.role}</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Code className="w-5 h-5"/>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech_stacks.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FolderOpen className="w-5 h-5"/>
                Features
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature: string, index: number) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5"/>
                Results
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.result.map((result: string, index: number) => (
                  <div key={index}
                       className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg border border-yellow-200">
                    <span className="text-yellow-800 font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}

            <Actions project={project} />
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Project Type</h3>
            <p className="text-gray-600">Business Website</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Development Time</h3>
            <p className="text-gray-600">2024</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Status</h3>
            <p className="text-green-600 font-medium">Live & Optimized</p>
          </div>
        </div>
      </div>
    </div>
  )
}