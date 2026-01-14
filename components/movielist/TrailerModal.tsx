"use client";
import ReactPlayer from "react-player";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  buttoncss: string;
  trailerUrl: string | null;
};

export const TrailerModals = ({ text, buttoncss, trailerUrl }: Props) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn("text-black bg-white", buttoncss)}
        disabled={!trailerUrl}
      >
        <p>{text}</p>
      </DialogTrigger>

      <DialogContent className="w-[900px] h-[500px]">
        <div className="w-full h-full flex items-center justify-center">
          {trailerUrl ? (
            <ReactPlayer src={trailerUrl} width="100%" height="100%" controls />
          ) : (
            <p className="text-center text-gray-500">Trailer not available</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
