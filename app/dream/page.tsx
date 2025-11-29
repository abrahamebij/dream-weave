"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/home/Hero";
import { DreamResult } from "@/components/home/DreamResult";
import { UserDreamGallery } from "@/components/UserDreamGallery";
import { useCreateImage } from "@/hooks/useCreateImage";

const Dream = () => {
  const [dreamText, setDreamText] = useState("");
  const [showResult, setShowResult] = useState(false);
  const { mutate, data, isPending, reset } = useCreateImage();

  const handleVisualizeDream = () => {
    if (!dreamText.trim()) return;
    console.log("data: ", data);
    mutate({ prompt: dreamText.trim() });
  };

  useEffect(() => {
    if (data) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowResult(true);
    }
  }, [data]);

  return (
    <>
      <main className="relative z-10">
        {!showResult ? (
          <>
            <Hero
              dreamText={dreamText}
              setDreamText={setDreamText}
              onVisualize={handleVisualizeDream}
              isLoading={isPending}
            />
            <UserDreamGallery />
          </>
        ) : (
          <DreamResult
            result={data!}
            dreamText={dreamText}
            onBack={() => {
              setShowResult(false);
              reset();
            }}
          />
        )}
      </main>
    </>
  );
};

export default Dream;
