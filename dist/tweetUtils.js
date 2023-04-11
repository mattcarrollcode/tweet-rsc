import { jsx as _jsx } from "react/jsx-runtime";
import { cloneElement } from "react";
export function formatTweetText(text, entities) {
    // Remove the URL pointing to the media in the tweet's text
    // The image is displayed separately from the text
    if (entities === null || entities === void 0 ? void 0 : entities.media) {
        for (const media of entities.media) {
            text = text.split(media.url).join("").trim();
        }
    }
    // Transform mentions, URLs and hashtags in tweets to
    // JSX "a" tags
    let replacements = [];
    if (entities === null || entities === void 0 ? void 0 : entities.urls) {
        for (const url of entities.urls) {
            replacements.push({
                JSXReplacement: (_jsx("a", Object.assign({ href: url.expanded_url, target: "_blank", rel: "noopener noreferrer", className: "text-blue-500" }, { children: url.display_url }))),
                textToReplace: url.url,
            });
        }
    }
    if (entities === null || entities === void 0 ? void 0 : entities.user_mentions) {
        for (const mention of entities.user_mentions) {
            replacements.push({
                JSXReplacement: (_jsx("a", Object.assign({ href: `https://twitter.com/${mention.screen_name}`, target: "_blank", rel: "noopener noreferrer", className: "text-blue-500" }, { children: "@" + mention.screen_name }))),
                textToReplace: "@" + mention.screen_name,
            });
        }
    }
    if (entities === null || entities === void 0 ? void 0 : entities.hashtags) {
        for (const hashtag of entities.hashtags) {
            replacements.push({
                JSXReplacement: (_jsx("a", Object.assign({ href: `https://twitter.com/hashtag/${hashtag.text}`, target: "_blank", rel: "noopener noreferrer", className: "text-blue-500" }, { children: "#" + hashtag.text }))),
                textToReplace: "#" + hashtag.text,
            });
        }
    }
    return replaceMultipleSubstringsWithJSX(text, replacements);
}
function replaceMultipleSubstringsWithJSX(text, replacements) {
    const elements = [];
    let lastIndex = 0;
    while (lastIndex < text.length) {
        let closestReplacement = null;
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
            elements.push(cloneElement(closestReplacement["JSXReplacement"], {
                key: elements.length,
            }));
            lastIndex =
                closestIndex + closestReplacement["textToReplace"].length;
        }
        else {
            const remainingText = text.slice(lastIndex);
            if (remainingText) {
                elements.push(remainingText);
            }
            break;
        }
    }
    return elements;
}
