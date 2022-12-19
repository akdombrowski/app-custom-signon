

export default async function handler(req, res) {
  const { iss, target_link_uri } = req.query;
  const authzEndpoint = "/authorize";
  const responseType = "code";
  const clientID = "57913547-d7fb-478c-b2d3-6f5144d9a43d";
  const scopes = ""
  const url = iss + authzEndpoint + "?response_type=" + responseType + "&client_id=" + clientID + "&scope=" + scopes + "&redirect_uri=" + target_link_uri;

  try {
    res.redirect(307, url);
  } catch (err) {
    res.status(500).send({ error: "failed to fetch data" });
  }
}
