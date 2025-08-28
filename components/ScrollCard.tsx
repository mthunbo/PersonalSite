import React from "react";
import { Button } from "./Button";
import { scroll, scrollHeader, scrollContent, scrollBody, scrollImage, scrollDescription, scrollActions } from "./scrollcard.styles";

type ScrollCardProps = {
  image?: string;
  title: string;
  description?: string;
  repoUrl?: string;
  liveUrl?: string;
};

export const ScrollCard: React.FC<ScrollCardProps> = ({
  image,
  title,
  description,
  repoUrl,
  liveUrl,
}) => {
  return (
    // The 'group' class on the container is CRUCIAL.
    // It enables the 'group-hover:' variants on child elements.
    <div className={scroll()}>
      {/* 1. ROLLED-UP STATE (Always Visible) */}
      <div className={scrollHeader()}>
        <h3 className="truncate font-heading text-lg font-semibold">{title}</h3>
      </div>

      {/* 2. UNFURLED CONTENT (Hidden by default, appears on hover) */}
      {/*
        - `max-h-0` and `opacity-0` hide the content initially.
        - `group-hover:max-h-[500px]` and `group-hover:opacity-100` expand and fade it in.
        - The transition classes make this animation smooth.
        - `overflow-hidden` is essential for the max-height trick to work.
      */}
      <div className={scrollContent()}>
        <div className={scrollBody()}>
          {image && (
            <div className={scrollImage()}>
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          )}

          {description && <p className={scrollDescription()}>{description}</p>}

          <div className={scrollActions()}>
            {repoUrl && (
              <Button
                variant="project"
                size="sm"
                onClick={() => window.open(repoUrl, "_blank")}
              >
                View Code
              </Button>
            )}
            {liveUrl && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.open(liveUrl, "_blank")}
              >
                View Live
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};