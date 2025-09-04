import React from "react";
import {
  card,
  cardHeader,
  cardBody,
  cardDescription,
  cardActions,
} from "./card.styles";
import { Button } from "./Button";

type CardProps = {
  image?: string;
  title: string;
  description?: string;
  type?: "project" | "blog";
  size?: "sm" | "md" | "lg";
  repoUrl?: string;
  liveUrl?: string;
};

export const Card: React.FC<CardProps> = ({
    image,
    title,
    description,
    type,
    size,
    repoUrl,
    liveUrl,
  }) => {
    return (
      <div className={card({ type, size })}>
        {/* Title */}
        <div className={cardHeader()}>{title}</div>
  
        {/* Image */}
        {image && (
            <div className="w-full aspect-video flex justify-center items-center overflow-hidden">
                <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                />
            </div>
        )}
  
        {/* Description and Actions */}
        <div className={cardBody()}>
          {description && <p className={cardDescription()}>{description}</p>}
  
          <div className={cardActions()}>
            {repoUrl && (
              <Button
                variant="project"
                onClick={() => window.open(repoUrl, "_blank")}
              >
                View Code
              </Button>
            )}
            {liveUrl && (
              <Button
                variant="secondary"
                onClick={() => window.open(liveUrl, "_blank")}
              >
                View Live
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };
