type User = {
  id: string;
  username: string;
};

export default async function Home() {
  const user: User = await getUser();
  return (
    <>
      <p>🦉2343</p>
      <p>{user.id}</p>
      <p>{user.username}</p>
      <p>🦉2343</p>
    </>
  );
}

async function getUser() {
  const url = `https://graph.instagram.com/v16.0/me?fields=id,username,media&access_token=${process.env.INSTAGRAM_TOKEN}`;
  const response = await fetch(url);
  const user = await response.json();
  console.log(user);
  return user;
}
