import { BookOpen, Settings, Code, Bot, Layers } from "lucide-react";
import type { Module, Lesson, LessonType } from "@/data/courseData";
import { cn } from "@/lib/utils";
import React from "react";

const iconMap = {
  book: BookOpen,
  settings: Settings,
  code: Code,
  bot: Bot,
  layers: Layers,
};

const badgeStyles: Record<LessonType, string> = {
  Theory: "bg-primary text-primary-foreground",
  Practical: "bg-primary text-primary-foreground",
  Code: "bg-primary text-primary-foreground",
  "Mini-Build": "bg-primary text-primary-foreground",
};

interface ModuleDetailProps {
  module: Module;
}

const ModuleDetail = ({ module }: ModuleDetailProps) => {
  return (
    <div className="rounded-2xl bg-accent border border-border p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-foreground">
        {module.label}: {module.title}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">{module.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {module.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {module.lessons.map((lesson) => {
          const Icon = iconMap[lesson.icon];
          return (
            <div className="bg-card  rounded-xl bg-card border border-border p-4 shadow-sm transition-shadow hover:shadow-md ">
            
            <div
              key={lesson.title}
              className="flex items-start gap-4 "
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-foreground">{lesson.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{lesson.description}</p>
              </div>
              <span
                className={cn(
                  "hidden md:block shrink-0 rounded-full px-3 py-1 text-xs font-semibold",
                  badgeStyles[lesson.type]
                )}
              >
                {lesson.type}
              </span>
             
            </div>
            <p
                className={cn(
                  "md:hidden w-max shrink-0 rounded-full px-3 py-1 text-xs font-semibold",
                  badgeStyles[lesson.type]
                )}
              >
                {lesson.type}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModuleDetail;
