export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const { resource } = req.query;

  if (!resource) {
    res.status(400).send("Bad Request");
    return;
  }

  // Replace with your own logic to generate the JRD
  const jrd = {
    subject: "acct:mechaneyes@hypermute.com",
    aliases: [
      "https://hypermute.com/@mechaneyes",
      "https://hypermute.com/users/mechaneyes"
    ],
    links: [
      {
        rel: "self",
        href: "https://hypermute.com/@mechaneyes",
      },
      {
        rel: "self",
        type: "application/activity+json",
        href: "https://hypermute.com/users/mechaneyes"
      },
      {
        rel: 'https://webfinger.net/rel/profile-page',
        href: "https://hypermute.com/@mechaneyes",
      },
    ],
  };

  res.status(200).json(jrd);
}
