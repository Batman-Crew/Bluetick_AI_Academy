import { BookOpen } from "lucide-react";
import { modules } from "@/data/courseData";
import { cn } from "@/lib/utils";
import React from "react";
import { ScrollArea } from "../ui/scroll-area";

interface ModuleListProps {
  activeId: number;
  onSelect: (id: number) => void;
}

const ModuleList = ({ activeId, onSelect }: ModuleListProps) => {
  return (
    <ScrollArea className=" h-[40rem] ">
      <div className="">

      {modules?.map((mod) => (
        <button
          key={mod.id}
          onClick={() => onSelect(mod.id)}
          className={cn(
            "flex items-center gap-3  rounded-xl w-full mt-4 p-4 text-left transition-all cursor-pointer duration-200",
            "bg-card border border-border shadow-sm hover:shadow-md",
            activeId === mod.id && "ring-2 ring-primary/20 bg-accent border-primary/20"
          )}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-primary">{mod.label}</p>
            <p className="text-sm text-muted-foreground truncate">{mod.title}</p>
          </div>
        </button>
      ))}
      </div>
    </ScrollArea>
  );
};

export default ModuleList;
