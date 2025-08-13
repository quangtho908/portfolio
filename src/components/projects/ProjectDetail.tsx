"use client";

import _ from "lodash";
import {
  Award,
  Calendar,
  Check,
  CheckCircle,
  Code,
  ExternalLink,
  FolderOpen,
  User,
} from "lucide-react";

import AppButton from "@/components/common/AppButton";
import ImageSlider from "@/components/ProjectPreview/ImageSlider";
import { useLanguage } from "@/context/LanguageContext";
import useTranslation from "@/hooks/useTranslation";
import type { Category, Project } from "@/payload-types";
import getImageUrl from "@/utils/getImageUrl";
import dataI18n from "@/utils/i18n";
import type { PayLoadData } from "@/utils/payloadUtil";

type Props = {
  project: PayLoadData<Project>;
};

export default function ProjectDetail({ project }: Props) {
  const { language } = useLanguage();
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          {t(dataI18n.infoProject)} {project?.[language].name}
        </h1>
        <p className="text-lg text-gray-600">
          {t({
            en: "Showcasing my development projects and achievements",
            vi: "Giới thiệu các dự án và thành tựu phát triển của tôi.",
          })}
        </p>
      </div>

      {/* Project Card */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
        {/* Image Slider */}
        <div className="p-8 pb-0">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            {project?.[language].name}
          </h2>

          {/* Slider Container */}
          <ImageSlider
            images={(project?.[language].images || []).map(({ image }) =>
              getImageUrl(image)
            )}
          />

          {/* Project Info */}
          <div className="mb-6 flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{project?.[language].duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{project?.[language].role}</span>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Description */}
          <div className="mb-8">
            <p className="text-lg leading-relaxed text-gray-700">
              {project?.[language].description}
            </p>
          </div>

          {/*    /!* Tech Stack *!/ */}
          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
              <Code className="h-5 w-5" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {(project?.[language].techStacks || []).map(
                ({ stack }, index: number) => (
                  <span
                    key={index}
                    className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 transition-colors hover:bg-primary-200"
                  >
                    {stack}
                  </span>
                )
              )}
            </div>
          </div>

          {/*    /!* Features *!/ */}
          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
              <FolderOpen className="h-5 w-5" />
              {t(dataI18n.features)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(project?.[language].features || []).map(
                ({ feature }, index: number) => (
                  <div
                    key={index}
                    className="rounded-full flex gap-2 bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
                  >
                    <span>
                      <Check className="h-5 w-5 text-green-600" />
                    </span>
                    <span>{feature}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/*    /!* Results *!/ */}
          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900">
              <Award className="h-5 w-5" />
              {t(dataI18n.results)}
            </h3>
            <div className="">
              {(project?.[language].results || []).map(
                ({ result }, index: number) => (
                  <div
                    key={index}
                    className="rounded-lg  flex gap-3 items-center py-3"
                  >
                    <span>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </span>
                    <span className="font-medium text-green-600">{result}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Action Buttons */}

          {!_.isEmpty(project?.[language].url) ? (
            <div className="flex flex-col gap-4 sm:flex-row">
              <AppButton
                onClick={() => {
                  window.open(project?.[language].url || "", "_blank");
                }}
                title={t(dataI18n.visitLiveSite)}
                icon={<ExternalLink className="h-4 w-4" />}
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <h3 className="mb-2 font-semibold text-gray-900">
            {t(dataI18n.category)}
          </h3>
          <p className="text-gray-600">
            {(project?.[language].category as Category).name}
          </p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <h3 className="mb-2 font-semibold text-gray-900">
            {t(dataI18n.developmentTime)}
          </h3>
          <p className="text-gray-600">2024</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <h3 className="mb-2 font-semibold text-gray-900">
            {t(dataI18n.status)}
          </h3>
          <p className="font-medium text-green-600">
            {t(dataI18n.liveNOptimize)}
          </p>
        </div>
      </div>
    </div>
  );
}
