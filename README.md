# Tweet RSC

This is library that allows you to embed tweets. It uses React's
server components to call the Twitter API from a server instead
of using Twitter's script to embed the tweet on the page. It
currently caches the result from Twitter's API indefinitely.

Styling for the Tweet component was written by [Lee Robinson](https://leerob.io/) ([source](https://github.com/leerob/leerob.io/blob/e4307827d4e77f1b48f087f0beb8b1112e257019/components/tweet.tsx))

Next steps:

- figure out how to extract this folder into a library
- make sure to figure out how to embed the tailwind styles when building the library
- figure out how to include this in a React server component project
  - instructions on how to include as a server component (should be straight forward)
  - instructions on how to include as a client component (harder, or maybe impossible if the project doesn't have a server component at the root?), first attempt below:

## How to include tweet-rsc in a client component

This is an example of how you can use the `Tweet` component from the `tweet-rsc` library
in a client component. Here is the definition of a client component located in the file
`ClientComponent.tsx` that will use the `Tweet` component from the `tweet-rsc` library:

```tsx{3,6}
'use client';

export default function ClientComponent({children}) {
  return (
    <>
      {children}
    </>
  );
}
```

Note that the `ClientComponent` takes a prop of `children` and `children` is included in the JSX
returned by `ClientComponent`.

Here is the definition of the _parent server component_ of the client component that
will use the `Tweet` component from the `tweet-rsc` library

```tsx
import ClientComponent from "./ClientComponent";
import { Tweet } from "./tweet-rsc";

export default function ParentServerComponent() {
  return (
    <ClientComponent>
      <Tweet id="1641891922230001665" />
    </ClientComponent>
  );
}
```

The in the server component parent of the client component in which we want to include the `Tweet` component
We are adding the `Tweet` component as a `child` of the `ClientComponent`. Because the `ClientComponent` takes
`child` as a prop and includes `child` in the JSX returned by `ClientComponent` the `Tweet` component will
be surfaced where `{child}` appears in `ClientComponent`'s JSX.

_Note_: If you do not have a server component as a parent of the client component in which you want to
include the tweet-rsc component, this will not work.

## JSON Payload examples

### Tweet with image

```json
{
  "__typename": "Tweet",
  "lang": "en",
  "favorite_count": 226,
  "possibly_sensitive": false,
  "created_at": "2023-03-29T14:34:41.000Z",
  "display_text_range": [0, 144],
  "entities": {
    "hashtags": [],
    "urls": [
      {
        "display_url": "github.com/reactwg/react-…",
        "expanded_url": "https://github.com/reactwg/react-native-new-architecture/discussions/110",
        "indices": [92, 115],
        "url": "https://t.co/4G6RAMfrHy"
      }
    ],
    "user_mentions": [],
    "symbols": [],
    "media": [
      {
        "display_url": "pic.twitter.com/rQd6FIwZ0U",
        "expanded_url": "https://twitter.com/SamuelSusla/status/1641086480675225601/photo/1",
        "indices": [145, 168],
        "url": "https://t.co/rQd6FIwZ0U"
      }
    ]
  },
  "id_str": "1641086480675225601",
  "text": "If you are interested about View Flattening in React Native, I wrote a short post about it: https://t.co/4G6RAMfrHy\n\nLet me know what you think! https://t.co/rQd6FIwZ0U",
  "user": {
    "id_str": "469266133",
    "name": "sammy",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1042172116911697920/JkIt3onc_normal.jpg",
    "screen_name": "SamuelSusla",
    "verified": false,
    "is_blue_verified": false
  },
  "edit_control": {
    "edit_tweet_ids": ["1641086480675225601"],
    "editable_until_msecs": "1680102281000",
    "is_edit_eligible": true,
    "edits_remaining": "5"
  },
  "mediaDetails": [
    {
      "display_url": "pic.twitter.com/rQd6FIwZ0U",
      "expanded_url": "https://twitter.com/SamuelSusla/status/1641086480675225601/photo/1",
      "ext_media_availability": { "status": "Available" },
      "indices": [145, 168],
      "media_url_https": "https://pbs.twimg.com/media/FsZNOgcWAAEQtrd.jpg",
      "original_info": {
        "height": 896,
        "width": 1995,
        "focus_rects": [
          { "x": 395, "y": 0, "w": 1600, "h": 896 },
          { "x": 1095, "y": 0, "w": 896, "h": 896 },
          { "x": 1150, "y": 0, "w": 786, "h": 896 },
          { "x": 1319, "y": 0, "w": 448, "h": 896 },
          { "x": 0, "y": 0, "w": 1995, "h": 896 }
        ]
      },
      "sizes": {
        "large": { "h": 896, "resize": "fit", "w": 1995 },
        "medium": { "h": 539, "resize": "fit", "w": 1200 },
        "small": { "h": 305, "resize": "fit", "w": 680 },
        "thumb": { "h": 150, "resize": "crop", "w": 150 }
      },
      "type": "photo",
      "url": "https://t.co/rQd6FIwZ0U"
    }
  ],
  "photos": [
    {
      "backgroundColor": { "red": 204, "green": 214, "blue": 221 },
      "cropCandidates": [
        { "x": 395, "y": 0, "w": 1600, "h": 896 },
        { "x": 1095, "y": 0, "w": 896, "h": 896 },
        { "x": 1150, "y": 0, "w": 786, "h": 896 },
        { "x": 1319, "y": 0, "w": 448, "h": 896 },
        { "x": 0, "y": 0, "w": 1995, "h": 896 }
      ],
      "expandedUrl": "https://twitter.com/SamuelSusla/status/1641086480675225601/photo/1",
      "url": "https://pbs.twimg.com/media/FsZNOgcWAAEQtrd.jpg",
      "width": 1995,
      "height": 896
    }
  ],
  "conversation_count": 1,
  "news_action_type": "conversation",
  "isEdited": false,
  "isStaleEdit": false
}
```

### Tweet with quote tweet

```json
{
  "__typename": "Tweet",
  "lang": "en",
  "favorite_count": 4,
  "created_at": "2023-03-31T20:07:39.000Z",
  "display_text_range": [0, 242],
  "entities": {
    "hashtags": [{ "indices": [0, 12], "text": "ReactNative" }],
    "urls": [],
    "user_mentions": [],
    "symbols": []
  },
  "id_str": "1641895049427550208",
  "text": "#ReactNative's new architecture renderer brings view flattening, previously an Android-only optimization, to iOS. View flattening reduces the depth of view hierarchies, lowers memory usage, and speeds up drawing times—all without extra setup!",
  "user": {
    "id_str": "378380992",
    "name": "Matt Carroll",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1562179359884029952/zk3CijLw_normal.jpg",
    "screen_name": "mattcarrollcode",
    "verified": false,
    "is_blue_verified": false
  },
  "edit_control": {
    "edit_tweet_ids": ["1641895049427550208"],
    "editable_until_msecs": "1680295059000",
    "is_edit_eligible": true,
    "edits_remaining": "5"
  },
  "conversation_count": 1,
  "news_action_type": "conversation",
  "quoted_tweet": {
    "lang": "en",
    "reply_count": 1,
    "retweet_count": 42,
    "favorite_count": 226,
    "possibly_sensitive": false,
    "created_at": "2023-03-29T14:34:41.000Z",
    "display_text_range": [0, 144],
    "entities": {
      "hashtags": [],
      "urls": [
        {
          "display_url": "github.com/reactwg/react-…",
          "expanded_url": "https://github.com/reactwg/react-native-new-architecture/discussions/110",
          "indices": [92, 115],
          "url": "https://t.co/4G6RAMfrHy"
        }
      ],
      "user_mentions": [],
      "symbols": [],
      "media": [
        {
          "display_url": "pic.twitter.com/rQd6FIwZ0U",
          "expanded_url": "https://twitter.com/SamuelSusla/status/1641086480675225601/photo/1",
          "indices": [145, 168],
          "url": "https://t.co/rQd6FIwZ0U"
        }
      ]
    },
    "id_str": "1641086480675225601",
    "text": "If you are interested about View Flattening in React Native, I wrote a short post about it: https://t.co/4G6RAMfrHy\n\nLet me know what you think! https://t.co/rQd6FIwZ0U",
    "user": {
      "id_str": "469266133",
      "name": "sammy",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1042172116911697920/JkIt3onc_normal.jpg",
      "screen_name": "SamuelSusla",
      "verified": false,
      "is_blue_verified": false
    },
    "edit_control": {
      "edit_tweet_ids": ["1641086480675225601"],
      "editable_until_msecs": "1680102281000",
      "is_edit_eligible": true,
      "edits_remaining": "5"
    },
    "mediaDetails": [
      {
        "display_url": "pic.twitter.com/rQd6FIwZ0U",
        "expanded_url": "https://twitter.com/SamuelSusla/status/1641086480675225601/photo/1",
        "ext_media_availability": { "status": "Available" },
        "indices": [145, 168],
        "media_url_https": "https://pbs.twimg.com/media/FsZNOgcWAAEQtrd.jpg",
        "original_info": {
          "height": 896,
          "width": 1995,
          "focus_rects": [
            { "x": 395, "y": 0, "w": 1600, "h": 896 },
            { "x": 1095, "y": 0, "w": 896, "h": 896 },
            { "x": 1150, "y": 0, "w": 786, "h": 896 },
            { "x": 1319, "y": 0, "w": 448, "h": 896 },
            { "x": 0, "y": 0, "w": 1995, "h": 896 }
          ]
        },
        "sizes": {
          "large": { "h": 896, "resize": "fit", "w": 1995 },
          "medium": { "h": 539, "resize": "fit", "w": 1200 },
          "small": { "h": 305, "resize": "fit", "w": 680 },
          "thumb": { "h": 150, "resize": "crop", "w": 150 }
        },
        "type": "photo",
        "url": "https://t.co/rQd6FIwZ0U"
      }
    ],
    "photos": [
      {
        "backgroundColor": { "red": 204, "green": 214, "blue": 221 },
        "cropCandidates": [
          { "x": 395, "y": 0, "w": 1600, "h": 896 },
          { "x": 1095, "y": 0, "w": 896, "h": 896 },
          { "x": 1150, "y": 0, "w": 786, "h": 896 },
          { "x": 1319, "y": 0, "w": 448, "h": 896 },
          { "x": 0, "y": 0, "w": 1995, "h": 896 }
        ],
        "expandedUrl": "https://twitter.com/SamuelSusla/status/1641086480675225601/photo/1",
        "url": "https://pbs.twimg.com/media/FsZNOgcWAAEQtrd.jpg",
        "width": 1995,
        "height": 896
      }
    ],
    "isEdited": false,
    "isStaleEdit": false
  },
  "isEdited": false,
  "isStaleEdit": false
}
```

### Tweet with card

```json
{
  "__typename": "Tweet",
  "lang": "en",
  "favorite_count": 243,
  "self_thread": { "id_str": "1629262255744503809" },
  "possibly_sensitive": false,
  "created_at": "2023-02-24T23:29:26.000Z",
  "display_text_range": [0, 208],
  "entities": {
    "hashtags": [],
    "urls": [
      {
        "display_url": "beta.reactjs.org/learn/tutorial…",
        "expanded_url": "https://beta.reactjs.org/learn/tutorial-tic-tac-toe",
        "indices": [184, 207],
        "url": "https://t.co/fI2B6TT8rL"
      }
    ],
    "user_mentions": [
      {
        "id_str": "1566463268",
        "indices": [20, 28],
        "name": "React",
        "screen_name": "reactjs"
      },
      {
        "id_str": "5697222",
        "indices": [63, 74],
        "name": "sophie alpert",
        "screen_name": "sophiebits"
      }
    ],
    "symbols": []
  },
  "id_str": "1629262255744503809",
  "text": "📰 I recently joined @reactjs! My inaugural project was porting @sophiebits's Tic Tac Toe tutorial to the new React docs. What would you like to see in the next, in the React tutorial? https://t.co/fI2B6TT8rL",
  "user": {
    "id_str": "378380992",
    "name": "Matt Carroll",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1562179359884029952/zk3CijLw_normal.jpg",
    "screen_name": "mattcarrollcode",
    "verified": false,
    "is_blue_verified": false
  },
  "edit_control": {
    "edit_tweet_ids": ["1629262255744503809"],
    "editable_until_msecs": "1677283166000",
    "is_edit_eligible": false,
    "edits_remaining": "5"
  },
  "conversation_count": 11,
  "news_action_type": "conversation",
  "card": {
    "card_platform": {
      "platform": {
        "audience": { "name": "production" },
        "device": { "name": "Swift", "version": "12" }
      }
    },
    "name": "summary_large_image",
    "url": "https://t.co/fI2B6TT8rL",
    "binding_values": {
      "photo_image_full_size_large": {
        "image_value": {
          "height": 419,
          "width": 800,
          "url": "https://pbs.twimg.com/card_img/1639232954701594625/7ayIAMcm?format=png&name=800x419"
        },
        "type": "IMAGE"
      },
      "thumbnail_image": {
        "image_value": {
          "height": 147,
          "width": 280,
          "url": "https://pbs.twimg.com/card_img/1639232954701594625/7ayIAMcm?format=png&name=280x150"
        },
        "type": "IMAGE"
      },
      "description": {
        "string_value": "The library for web and native user interfaces",
        "type": "STRING"
      },
      "domain": { "string_value": "react.dev", "type": "STRING" },
      "thumbnail_image_large": {
        "image_value": {
          "height": 315,
          "width": 600,
          "url": "https://pbs.twimg.com/card_img/1639232954701594625/7ayIAMcm?format=png&name=600x600"
        },
        "type": "IMAGE"
      },
      "summary_photo_image_small": {
        "image_value": {
          "height": 202,
          "width": 386,
          "url": "https://pbs.twimg.com/card_img/1639232954701594625/7ayIAMcm?format=png&name=386x202"
        },
        "type": "IMAGE"
      },
      "thumbnail_image_original": {
        "image_value": {
          "height": 567,
          "width": 1080,
          "url": "https://pbs.twimg.com/card_img/1639232954701594625/7ayIAMcm?format=png&name=orig"
        },
        "type": "IMAGE"
      },
      "site": {
        "scribe_key": "publisher_id",
        "type": "USER",
        "user_value": { "id_str": "1566463268", "path": [] }
      },
      "photo_image_full_size_small": {
        "image_value": {
          "height": 202,
          "width": 386,
          "url": "https://pbs.twimg.com/card_img/1639232954701594625/7ayIAMcm?format=png&name=386x202"
        },
        "type": "IMAGE"
      },
      "summary_photo_image_large": {
        "image_value": {
          "height": 419,
          "width": 800,
          "url": "https://pbs.twimg.com/card_img/1639232954701594625/7ayIAMcm?format=png&name=800x419"
        },
        "type": "IMAGE"
      },
      "thumbnail_image_small": {
        "image_value": {
          "height": 76,
          "width": 144,
          "url": "https://pbs.twimg.com/card_img/1639232954701594625/7ayIAMcm?format=png&name=144x144"
        },
        "type": "IMAGE"
      },
      "creator": {
        "type": "USER",
        "user_value": { "id_str": "1566463268", "path": [] }
      },
      "thumbnail_image_x_large": {
        "image_value": {
          "height": 567,
          "width": 1080,
          "url": "https://pbs.twimg.com/card_img/1639232954701594625/7ayIAMcm?format=png&name=2048x2048_2_exp"
        },
        "type": "IMAGE"
      },
      "photo_image_full_size_original": {
        "image_value": {
          "height": 567,
          "width": 1080,
          "url": "https://pbs.twimg.com/card_img/1639232954701594625/7ayIAMcm?format=png&name=orig"
        },
        "type": "IMAGE"
      },
      "vanity_url": {
        "scribe_key": "vanity_url",
        "string_value": "react.dev",
        "type": "STRING"
      },
      "photo_image_full_size": {
        "image_value": {
          "height": 314,
          "width": 600,
          "url": "https://pbs.twimg.com/card_img/1639232954701594625/7ayIAMcm?format=png&name=600x314"
        },
        "type": "IMAGE"
      },
      "thumbnail_image_color": {
        "image_color_value": {
          "palette": [
            {
              "rgb": { "blue": 38, "green": 32, "red": 28 },
              "percentage": 97.19
            },
            {
              "rgb": { "blue": 143, "green": 139, "red": 137 },
              "percentage": 2.41
            },
            {
              "rgb": { "blue": 213, "green": 211, "red": 209 },
              "percentage": 0.29
            }
          ]
        },
        "type": "IMAGE_COLOR"
      },
      "title": {
        "string_value": "Tutorial: Tic-Tac-Toe – React",
        "type": "STRING"
      },
      "summary_photo_image_color": {
        "image_color_value": {
          "palette": [
            {
              "rgb": { "blue": 38, "green": 32, "red": 28 },
              "percentage": 97.19
            },
            {
              "rgb": { "blue": 143, "green": 139, "red": 137 },
              "percentage": 2.41
            },
            {
              "rgb": { "blue": 213, "green": 211, "red": 209 },
              "percentage": 0.29
            }
          ]
        },
        "type": "IMAGE_COLOR"
      },
      "summary_photo_image_x_large": {
        "image_value": {
          "height": 567,
          "width": 1080,
          "url": "https://pbs.twimg.com/card_img/1639232954701594625/7ayIAMcm?format=png&name=2048x2048_2_exp"
        },
        "type": "IMAGE"
      },
      "summary_photo_image": {
        "image_value": {
          "height": 314,
          "width": 600,
          "url": "https://pbs.twimg.com/card_img/1639232954701594625/7ayIAMcm?format=png&name=600x314"
        },
        "type": "IMAGE"
      },
      "photo_image_full_size_color": {
        "image_color_value": {
          "palette": [
            {
              "rgb": { "blue": 38, "green": 32, "red": 28 },
              "percentage": 97.19
            },
            {
              "rgb": { "blue": 143, "green": 139, "red": 137 },
              "percentage": 2.41
            },
            {
              "rgb": { "blue": 213, "green": 211, "red": 209 },
              "percentage": 0.29
            }
          ]
        },
        "type": "IMAGE_COLOR"
      },
      "photo_image_full_size_x_large": {
        "image_value": {
          "height": 567,
          "width": 1080,
          "url": "https://pbs.twimg.com/card_img/1639232954701594625/7ayIAMcm?format=png&name=2048x2048_2_exp"
        },
        "type": "IMAGE"
      },
      "card_url": {
        "scribe_key": "card_url",
        "string_value": "https://t.co/fI2B6TT8rL",
        "type": "STRING"
      },
      "summary_photo_image_original": {
        "image_value": {
          "height": 567,
          "width": 1080,
          "url": "https://pbs.twimg.com/card_img/1639232954701594625/7ayIAMcm?format=png&name=orig"
        },
        "type": "IMAGE"
      }
    }
  },
  "isEdited": false,
  "isStaleEdit": false
}
```
