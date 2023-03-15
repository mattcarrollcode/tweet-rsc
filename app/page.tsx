type TweetEmbed = {
  url: string;
  title: string;
  html: string;
  width: string;
  height: string;
  type: string;
  cache_age: string;
  provider_name: string;
  provider_url: string;
  version: string;
};

export default async function Home() {
  const EmbeddedTweet = await TwitterEmbedExample();
  // const EmbeddedInsta = await InstagramEmbedExample();
  return (
    <>
      {EmbeddedTweet}
      {/* {EmbeddedInsta} */}
    </>
  );
}

async function TwitterEmbedExample() {
  const tweet = await getTwitterEmbed(
    "https://twitter.com/mattcarrollcode/status/1629262255744503809"
  );
  return (
    <>
      <p>Twitter Embed example:</p>
      <p>{tweet.url}</p>
      <p>{tweet.title}</p>
      <p>{tweet.html}</p>
      <div dangerouslySetInnerHTML={{ __html: tweet.html }} />
      <p>{tweet.html}</p>
      <p>{tweet.width}</p>
      <p>{tweet.height}</p>
      <p>{tweet.type}</p>
      <p>{tweet.cache_age}</p>
      <p>{tweet.provider_name}</p>
      <p>{tweet.provider_url}</p>
      <p>{tweet.version}</p>
    </>
  );
}

async function getTwitterEmbed(url: string) {
  const oembedURL = `https://publish.twitter.com/oembed?url=${url}`;
  const response = await fetch(oembedURL);
  const embed = await response.json();
  console.log(embed);
  return embed;
}

async function InstagramEmbedExample() {
  const post = await getFacebookEmbed(
    "https://www.instagram.com/p/CjldKGeBi2K/"
  );
  return;
}

async function getFacebookEmbed(url: string) {
  const oembedURL = `https://graph.facebook.com/v16.0/instagram_oembed?url=${url}`;
  const response = await fetch(oembedURL);
  const embed = await response.json();
  console.log(embed);
  return embed;
}
