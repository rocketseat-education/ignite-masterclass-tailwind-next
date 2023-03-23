export default function Home() {
  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400">
      <h1 id="authentication">Authentication</h1>
      <p>You&#39;ll need to authenticate your requests to access any of the endpoints in the Protocol API. In this guide, we&#39;ll look at how authentication works. Protocol offers two ways to authenticate your API requests: Basic authentication and OAuth2 with a token.</p>
      <h2 id="basic-authentication">Basic authentication</h2>
      <p>With basic authentication, you use your username and password to authenticate your HTTP requests. Unless you have a very good reason, you probably shouldn&#39;t use basic auth. Here&#39;s how to authenticate using cURL:</p>
      <pre><code className="language-bash">curl https://api.protocol.chat/v1/conversations \
        -u username:password
      </code></pre>
      <p>Please don&#39;t commit your Protocol password to GitHub!</p>
      <h2 id="oauth2-with-bearer-token">OAuth2 with bearer token</h2>
      <p>The recommended way to authenticate with the Protocol API is by using OAuth2. When establishing a connection using OAuth2, you will need your access token — you will find it in the <a href="#">Protocol dashboard</a> under API settings. Here&#39;s how to add the token to the request header using cURL:</p>
      <pre><code className="language-bash">curl https://api.protocol.chat/v1/conversations \
        -H &quot;Authorization: Bearer token&quot;
      </code></pre>
      <p>Always keep your token safe and reset it if you suspect it has been compromised.</p>
      <h2 id="using-an-sdk">Using an SDK</h2>
      <p>If you use one of our official SDKs, you won&#39;t have to worry about any of the above — fetch your access token from the <a href="#">Protocol dashboard</a> under API settings, and the client library will take care of the rest. All the client libraries use OAuth2 behind the scenes.</p>
    </main>
  )
}
