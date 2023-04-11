import { ReactElement, cloneElement } from "react";
import type { Entities } from "./tweet.types";

type Replacements = {
  JSXReplacement: ReactElement;
  textToReplace: string;
};

export function formatTweetText(text: string, entities: Entities | undefined) {
  // Remove the URL pointing to the media in the tweet's text
  // The image is displayed separately from the text
  if (entities?.media) {
    for (const media of entities.media) {
      text = text.split(media.url).join("").trim();
    }
  }
  // Transform mentions, URLs and hashtags in tweets to
  // JSX "a" tags
  let replacements: Replacements[] = [];
  if (entities?.urls) {
    for (const url of entities.urls) {
      replacements.push({
        JSXReplacement: (
          <a
            href={url.expanded_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {url.display_url}
          </a>
        ),
        textToReplace: url.url,
      });
    }
  }
  if (entities?.user_mentions) {
    for (const mention of entities.user_mentions) {
      replacements.push({
        JSXReplacement: (
          <a
            href={`https://twitter.com/${mention.screen_name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {"@" + mention.screen_name}
          </a>
        ),
        textToReplace: "@" + mention.screen_name,
      });
    }
  }
  if (entities?.hashtags) {
    for (const hashtag of entities.hashtags) {
      replacements.push({
        JSXReplacement: (
          <a
            href={`https://twitter.com/hashtag/${hashtag.text}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {"#" + hashtag.text}
          </a>
        ),
        textToReplace: "#" + hashtag.text,
      });
    }
  }
  return replaceMultipleSubstringsWithJSX(text, replacements);
}

function replaceMultipleSubstringsWithJSX(
  text: string,
  replacements: Replacements[]
) {
  const elements = [];
  let lastIndex = 0;

  while (lastIndex < text.length) {
    let closestReplacement: {
      JSXReplacement: ReactElement;
      textToReplace: string;
      index: number;
    } | null = null;
    let closestIndex = Infinity;

    replacements.forEach(({ textToReplace, JSXReplacement }) => {
      const currentIndex = text.indexOf(textToReplace, lastIndex);

      if (currentIndex !== -1 && currentIndex < closestIndex) {
        closestIndex = currentIndex;
        closestReplacement = {
          JSXReplacement,
          textToReplace,
          index: currentIndex,
        };
      }
    });

    if (closestReplacement) {
      const beforeText = text.slice(lastIndex, closestIndex);
      if (beforeText) {
        elements.push(beforeText);
      }
      elements.push(
        cloneElement(closestReplacement["JSXReplacement"], {
          key: elements.length,
        })
      );

      lastIndex =
        closestIndex + (closestReplacement["textToReplace"] as string).length;
    } else {
      const remainingText = text.slice(lastIndex);
      if (remainingText) {
        elements.push(remainingText);
      }
      break;
    }
  }
  return elements;
}
