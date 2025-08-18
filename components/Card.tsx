// components/Card.tsx
import React from "react";
import {
  card,
  cardImage,
  cardBody,
  cardTitle,
  cardDescription,
  cardActions,
} from "./Card.styles";
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
      {image && <img src={image} alt={title} className={cardImage()} />}

      <div className={cardBody()}>
        <h3 className={cardTitle()}>{title}</h3>
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
